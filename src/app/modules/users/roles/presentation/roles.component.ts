import { Component, OnInit } from '@angular/core';
import { ListRoleUseCase } from '../application/list-roles.usecase';
import { ListModulesUseCase } from '../application/list-modules.usecase';
import { UpdatePermissionUseCase } from '../application/update-permission.usecase';
import { ListModulesSubscriptionUseCase } from '../application/list-modules-subscription.usecase';
import { ListRoles, ListModules } from '../domain/role.model';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { Observable, tap, catchError, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './roles.component.html'
})
export class RolesComponent implements OnInit {

  roles$!: Observable<ListRoles[]>;
  modules$!: Observable<ListModules[]>;

  selectedRole: ListRoles | null = null;

  loading = false;
  error: string | null = null;

  permissionsForm!: FormGroup;
  originalModules: ListModules[] = [];

  constructor(
    private listRole: ListRoleUseCase,
    private listModule: ListModulesUseCase,
    private updateModule: UpdatePermissionUseCase,
    private listModuleSuscription: ListModulesSubscriptionUseCase,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.permissionsForm = this.fb.group({
      modules: this.fb.array([])
    });

    this.loadRoles();
  }

  get modulesFormArray(): FormArray {
    return this.permissionsForm.get('modules') as FormArray;
  }

  loadRoles(): void {
    this.loading = true;

    this.roles$ = this.listRole.execute(2).pipe(
      tap((roles) => {
        this.selectedRole = roles[0] || null;

        if (this.selectedRole) {
          this.loadModuleByRoles(this.selectedRole.id);
        }

        this.loading = false;
      }),
      catchError((err) => {
        console.error(err);
        this.error = 'Error cargando roles';
        this.loading = false;
        return of([]);
      })
    );
  }

  loadModuleByRoles(roleId: number): void {
    this.loading = true;

    const data = {
      idRol: roleId,
      idEmp: 2
    };

    this.modules$ = this.listModule.execute(data).pipe(

      switchMap((modules) => {
        if (modules.length > 0) {
          return of(modules);
        }
        return this.listModuleSuscription.execute({ idEmp: 2 });
      }),

      tap((modules) => {
        this.originalModules = structuredClone(modules);
        this.buildForm(modules);
        this.loading = false;
      }),

      catchError((err) => {
        console.error(err);
        this.loading = false;
        return of([]);
      })
    );
  }

  buildForm(modules: ListModules[]) {
    const formArray = this.fb.array(
      modules.map(m =>
        this.fb.group({
          id_mod: [m.id_mod],
          nombre: [m.nombre],
          view: [m.view],
          make: [m.make],
          edit: [m.edit]
        })
      )
    );

    this.permissionsForm.setControl('modules', formArray);
  }

  selectRole(role: ListRoles) {
    this.selectedRole = role;
    this.loadModuleByRoles(role.id);
  }

  saveChanges() {

    const payload = {
      idRol: this.selectedRole?.id,
      modules: this.modulesFormArray.value
    };

    console.log('payload:', payload);

    this.updateModule.execute(payload).subscribe({
      next: () => {
        console.log('Guardado correctamente');
        this.originalModules = structuredClone(this.modulesFormArray.value);
      },
      error: (err) => console.error(err)
    });
  }

  discardChanges() {
    this.buildForm(this.originalModules);
  }

}