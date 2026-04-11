import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CashReceipt } from '../domain/cash_receipt.model';
import { ApiService } from '../../../../core/services/api.service';

@Injectable({ providedIn: 'root' })
export class CashReceiptService {

  constructor(private apiService: ApiService) {}

  create(data: CashReceipt) {
    return this.apiService.post('/cash-receipts', data);
  }

  list() {
    return this.apiService.get<CashReceipt[]>('/cash-receipts');
  }
}