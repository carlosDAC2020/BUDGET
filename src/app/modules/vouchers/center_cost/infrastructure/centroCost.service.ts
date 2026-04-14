import { Injectable } from '@angular/core';
import { CenterCost } from '../domain/centerCost.model';
import { ApiService } from '../../../../core/services/api.service';

@Injectable({ providedIn: 'root' })
export class CenterCostService {

  constructor(private apiService: ApiService) {}

  create(data: CenterCost) {
    return this.apiService.post('tenants/centros-costos', data);
  }

  update(data: CenterCost) {
    return this.apiService.put(`tenants/centros-costos/${data.id}`, data);
  }

  list() {
    return this.apiService.get<CenterCost[]>('tenants/centros-costos');
  }
}