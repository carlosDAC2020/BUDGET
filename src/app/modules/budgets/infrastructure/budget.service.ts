import { Injectable } from '@angular/core';
import { Budget, BudgetResponse } from '../domain/budget.model';
import { ApiService } from '../../../core/services/api.service';

@Injectable({ providedIn: 'root' })
export class BudgetService {

  constructor(private apiService: ApiService) {}

  create(data: Budget) {
    return this.apiService.post('tenants/presupuesto', data);
  }

  list() {
    return this.apiService.get<BudgetResponse>('tenants/presupuesto');
  }
}