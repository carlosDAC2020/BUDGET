import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';

@Injectable({ providedIn: 'root' })
export class MainService {

  constructor(private apiService: ApiService) {}

  create(data: any) {
    return this.apiService.post('tenants/presupuesto', data);
  }

  list() {
    return this.apiService.get<any>('tenants/presupuesto');
  }
}