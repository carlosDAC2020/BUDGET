import { Component, Input, OnInit } from '@angular/core';
import { CreateUserUseCase } from '../application/create-user.usecase';
import { updateUserUseCase } from '../application/update-user.usecase';
import { ListUserUseCase } from '../application/list-user.usecase';
import { ListRoleUseCase } from '../../roles/application/list-roles.usecase';
import { CreateRoleUseCase} from '../../roles/application/create-role.usecase';
import { Observable, map, tap } from 'rxjs';
import { managedRole, Users } from '../domain/user.model';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit{

  users$!: Observable<Users[]>;
  rolesStats$!: Observable<managedRole[]>;
  @Input() data?: Users;
  form!: FormGroup;
  isSaving = false;
  isEdit = false;
  totalUsers = 0;
  isModalOpen = false;
  roleForm!: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private createUser: CreateUserUseCase, 
    private listUsers: ListUserUseCase,
    private listRoles: ListRoleUseCase,
    private createRole: CreateRoleUseCase,
    private updateUser: updateUserUseCase) {}


  ngOnInit() {
    this.loadUsers();
    this.userForm();
    this.rolesForm();
    this.loadRoles();
  }

  loadUsers() {
    this.users$ = this.listUsers.execute(2); // ToDo pasar el id de la emprasa por parametro
  }

  rolesForm(){ 
    this.roleForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  userForm() {
    this.form = this.fb.group({
      id_user: [''],
      cognito_sub:[''],
      username: [''],
      nombre: [''],
      apellido: [''],
      email: [''],
      id_rol: [null],
      id_empresa: [2],
      password_hash: [''],
      is_active: [true]
    });
  }

  save() {
    if (this.form.invalid) return;
    
      this.isSaving = true;
    
      const payload: Users = {
        ...this.form.value
      };
    
      const request = this.isEdit
        ? this.updateUser.execute(payload)
        : this.createUser.execute(payload);
    
      request.subscribe({
        next: () => {
          this.isSaving = false;
          this.loadUsers();
          this.closeModal();
        },
        error: () => {
          this.isSaving = false;
        }
      });
  }

  editUser(user: Users) {
      this.openModalUser(user);
    }
  
  toggleStatus(user: Users) {
  
      const updated = {
      ...user,
      is_active: !user.is_active
    };
  
    this.updateUser.execute(updated).subscribe(() => {
      this.loadUsers();
    });
  }

  openModalUser(data?: Users) {
      this.isEdit = !!data;
      this.form.reset();
      if (data) {
        this.form.patchValue({
          id_user: data.id,
          nombre: data.nombre,
          apellido: data.apellido,
          username: data.username,
          email: data.email,
          id_rol: data.id_rol,
          id_empresa: data.id_empresa,
          password_hash: data.password_hash,
          is_active: data.is_active
        });
      }
  }

  loadRoles() {
    this.rolesStats$ = this.listRoles.execute(2).pipe(
      tap(roles => {
        this.totalUsers = roles.reduce((acc, r) => acc + (r.users_count || 0), 0);
      }),
      map(roles =>
        roles.map(r => ({
          nombre: r.nombre,
          count: r.users_count || 0,
          percentage: this.totalUsers
            ? Math.round((r.users_count * 100) / this.totalUsers)
            : 0
        }))
      )
    );
  }

  openModal() {
    this.roleForm.reset();
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  
  createRol(event?: Event) {
    event?.stopPropagation();
    if (this.roleForm.invalid || this.isSaving) return;
    this.isSaving = true;
    const payload = this.roleForm.value;
    this.createRole.execute(payload).subscribe({
      next: () => {
        this.isModalOpen = false;
        this.isSaving = false;
        this.roleForm.reset({
        is_active: true
      });
         this.loadRoles();
      },
      error: (err) => {
        this.isSaving = false;
      }
    });
  }

}