import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CashReceipt } from '../domain/cash_receipt.model';

@Injectable({ providedIn: 'root' })
export class CashReceiptService {

  constructor(private http: HttpClient) {}

  create(data: CashReceipt) {
    return this.http.post('/cash-receipts', data);
  }

  list() {
    return this.http.get<CashReceipt[]>('/cash-receipts');
  }
}