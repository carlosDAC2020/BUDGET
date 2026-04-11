import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { paymentVoucher } from '../domain/payment_voucher.model';
import { ApiService } from '../../../../core/services/api.service';

@Injectable({ providedIn: 'root' })
export class PaymentVoucherService {

  constructor(private apiService: ApiService) {}

  create(data: paymentVoucher) {
    return this.apiService.post('/payment-vouchers', data);
  }

  list() {
    return this.apiService.get<paymentVoucher[]>('/payment-vouchers');
  }
}