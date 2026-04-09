import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Budget } from '../domain/budget.model';

@Injectable({ providedIn: 'root' })
export class BudgetService {

  constructor(private http: HttpClient) {}

  create(data: Budget) {
    return this.http.post('/budgets', data);
  }

  list() {
    return this.http.get<Budget[]>('/budgets');
  }
}