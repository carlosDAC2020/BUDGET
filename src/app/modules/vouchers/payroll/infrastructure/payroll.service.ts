import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Payroll } from '../domain/payroll.model';

@Injectable({ providedIn: 'root' })
export class PayrollService {

  constructor(private http: HttpClient) {}

  create(data: Payroll) {
    return this.http.post('/payrolls', data);
  }

  list() {
    return this.http.get<Payroll[]>('/payrolls');
  }
}