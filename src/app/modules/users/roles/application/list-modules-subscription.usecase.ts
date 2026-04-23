import { Injectable } from '@angular/core';
import { RolesService } from '../infrastructure/roles.service';
import { ListModules, subscription } from '../domain/role.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ListModulesSubscriptionUseCase {

  constructor(private service: RolesService) {}

  execute(data: subscription): Observable<ListModules[]> {
    return this.service.listModulesBySuscription(data);
  }
}