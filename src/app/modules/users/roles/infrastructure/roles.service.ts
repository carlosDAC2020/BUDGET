import { Injectable } from '@angular/core';
import { ListRoles, ListModules, Modules, subscription, Roles } from '../domain/role.model';
import { ApiService } from '../../../../core/services/api.service';

@Injectable({ providedIn: 'root' })
export class RolesService {

  constructor(private apiService: ApiService) {}

  updatePermission(data: any ) {
    return this.apiService.post(`security/roles/${data.idRol}/asign`, data);
  }

  list(id: number) {
    return this.apiService.get<ListRoles[]>(`security/roles/${id}`);
  }

  listModules(data: Modules){
    return this.apiService.get<ListModules[]>(`security/roles/${data.idRol}/modules/${data.idEmp}`);
  }

  listModulesBySuscription(data: subscription){
    return this.apiService.get<ListModules[]>(`security/module/subscription/${data.idEmp}`);
  }

  create(data: Roles ) {
    return this.apiService.post(`security/roles`, data);
  }

}