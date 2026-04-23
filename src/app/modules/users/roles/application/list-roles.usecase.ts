import { Injectable } from '@angular/core';
import { RolesService } from '../infrastructure/roles.service';
import { ListRoles } from '../domain/role.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ListRoleUseCase {

  constructor(private service: RolesService) {}

  execute(id:number): Observable<ListRoles[]> {
    return this.service.list(id);
  }
}