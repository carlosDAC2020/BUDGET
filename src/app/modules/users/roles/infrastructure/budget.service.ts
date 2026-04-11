import { Injectable } from '@angular/core';
import { Budget } from '../domain/budget.model';
import { ApiService } from '../../../../core/services/api.service';

@Injectable({ providedIn: 'root' })
export class BudgetService {

  constructor(private apiService: ApiService) {}

  create(data: Budget) {
    return this.apiService.post('/budgets', data);
  }

  list() {
    return this.apiService.get<Budget[]>('/budgets');
  }
}