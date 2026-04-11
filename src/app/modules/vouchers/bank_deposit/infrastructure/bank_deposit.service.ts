import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BankDeposit } from '../domain/bank_deposit.model';
import { ApiService } from '../../../../core/services/api.service';

@Injectable({ providedIn: 'root' })
export class BankDepositService {

  constructor(private apiService: ApiService) {}

  create(data: BankDeposit) {
    return this.apiService.post('/bank-deposits', data);
  }

  list() {
    return this.apiService.get<BankDeposit[]>('/bank-deposits');
  }
}