import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';

@Injectable({ providedIn: 'root' })
export class SidebarService {

  constructor(private apiService: ApiService) {}

  list() {
    return this.apiService.get<any>('tenants/presupuesto');
  }
}