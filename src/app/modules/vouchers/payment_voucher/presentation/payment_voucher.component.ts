import { Component } from '@angular/core';
import { CreatePaymentVoucherUseCase } from '../application/create_payment_voucher.usecase';

@Component({
  selector: 'app_payment_voucher',
  templateUrl: './payment_voucher.component.html'
})
export class PaymentVoucherComponent {

  constructor(private createPaymentVoucher: CreatePaymentVoucherUseCase) {}

  save(form: any) {
    this.createPaymentVoucher.execute(form).subscribe();
  }
}