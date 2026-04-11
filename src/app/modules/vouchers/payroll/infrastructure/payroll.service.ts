import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Payroll } from '../domain/payroll.model';
import { ApiService } from '../../../../core/services/api.service';

@Injectable({ providedIn: 'root' })
export class PayrollService {

  constructor(private apiService: ApiService) {}

  create(data: Payroll) {
    return this.apiService.post('/payrolls', data);
  }

  list() {
    return this.apiService.get<Payroll[]>('/payrolls');
  }
}