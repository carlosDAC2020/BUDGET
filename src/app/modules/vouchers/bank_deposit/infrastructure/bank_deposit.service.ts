import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BankDeposit } from '../domain/bank_deposit.model';

@Injectable({ providedIn: 'root' })
export class BankDepositService {

  constructor(private http: HttpClient) {}

  create(data: BankDeposit) {
    return this.http.post('/bank-deposits', data);
  }

  list() {
    return this.http.get<BankDeposit[]>('/bank-deposits');
  }
}