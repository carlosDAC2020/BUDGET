import { Injectable } from '@angular/core';
import { RolesService } from '../infrastructure/roles.service';
import { Roles } from '../domain/role.model';

@Injectable({ providedIn: 'root' })
export class CreateRoleUseCase {

  constructor(private service: RolesService) {}

  execute(data: Roles) {
    return this.service.create(data);
  }
}