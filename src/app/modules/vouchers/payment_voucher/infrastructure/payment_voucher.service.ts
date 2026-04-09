import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { paymentVoucher } from '../domain/payment_voucher.model';

@Injectable({ providedIn: 'root' })
export class PaymentVoucherService {

  constructor(private http: HttpClient) {}

  create(data: paymentVoucher) {
    return this.http.post('/budgets', data);
  }

  list() {
    return this.http.get<paymentVoucher[]>('/budgets');
  }
}