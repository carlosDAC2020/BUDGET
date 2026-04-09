import { Injectable } from '@angular/core';
import { PaymentVoucherService } from '../infrastructure/payment_voucher.service';
import { paymentVoucher } from '../domain/payment_voucher.model';

@Injectable({ providedIn: 'root' })
export class CreatePaymentVoucherUseCase {

  constructor(private service: PaymentVoucherService) {}

  execute(data: paymentVoucher) {
    if (!data.name) {
      throw new Error('Nombre requerido');
    }

    if (data.amount <= 0) {
      throw new Error('Monto inválido');
    }

    return this.service.create(data);
  }
}