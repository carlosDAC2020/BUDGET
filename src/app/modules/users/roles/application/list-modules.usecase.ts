import { Injectable } from '@angular/core';
import { RolesService } from '../infrastructure/roles.service';
import { ListModules, Modules } from '../domain/role.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ListModulesUseCase {

  constructor(private service: RolesService) {}

  execute(data: Modules): Observable<ListModules[]> {
    return this.service.listModules(data);
  }
}