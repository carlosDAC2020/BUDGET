import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovementsManagement } from '../domain/movements_management.model';
import { ApiService } from '../../../../core/services/api.service';

@Injectable({ providedIn: 'root' })
export class MovementsManagementService {

  constructor(private apiService: ApiService) {}

  create(data: MovementsManagement) {
    return this.apiService.post('/budgets', data);
  }

  list() {
    return this.apiService.get<MovementsManagement[]>('/budgets');
  }
}