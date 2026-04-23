import { Injectable } from '@angular/core';
import { RolesService } from '../infrastructure/roles.service';
import { ListModules } from '../domain/role.model';

@Injectable({ providedIn: 'root' })
export class UpdatePermissionUseCase {

  constructor(private service: RolesService) {}

  execute(data: any) {
    return this.service.updatePermission(data);
  }
}