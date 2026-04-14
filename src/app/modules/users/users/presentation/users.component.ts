import { Component, Input, OnInit } from '@angular/core';
import { CreateUserUseCase } from '../application/create-user.usecase';
import { updateUserUseCase } from '../application/update-user.usecase';
import { ListUserUseCase } from '../application/list-user.usecase';
import { Observable } from 'rxjs';
import { Users } from '../domain/user.model';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit{

  users$!: Observable<Users[]>;
  @Input() data?: Users;
  form!: FormGroup;
  isModalOpenUser = false;
  isSaving = false;
  isEdit = false;

  constructor(
    private fb: FormBuilder, 
    private createUser: CreateUserUseCase, 
    private listUsers: ListUserUseCase, 
    private updateUser: updateUserUseCase) {}


  ngOnInit() {
    this.loadUsers();
    this.userForm();
  }

  loadUsers() {
    this.users$ = this.listUsers.execute(2); // ToDo pasar el id de la emprasa por parametro
  }

  userForm() {
    this.form = this.fb.group({
      cognito_sub:[''],
      username: [''],
      nombre: [''],
      apellido: [''],
      email: [''],
      id_rol: [null],
      id_empresa: [2],
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
          nombre: data.nombre,
          apellido: data.apellido,
          username: data.username,
          email: data.email,
          id_rol: data.id_rol,
          id_empresa: data.id_empresa,
          is_active: data.is_active
        });
      }
      this.isModalOpenUser = true;
  }
    
  closeModal() {
      this.isModalOpenUser = false;
  }


}