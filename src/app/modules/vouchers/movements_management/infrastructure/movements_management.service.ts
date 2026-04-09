import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovementsManagement } from '../domain/movements_management.model';

@Injectable({ providedIn: 'root' })
export class MovementsManagementService {

  constructor(private http: HttpClient) {}

  create(data: MovementsManagement) {
    return this.http.post('/budgets', data);
  }

  list() {
    return this.http.get<MovementsManagement[]>('/budgets');
  }
}