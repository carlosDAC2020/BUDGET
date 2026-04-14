import { Component } from '@angular/core';
import { CreateCashReceiptUseCase } from '../application/cash_receipt.usecase';

@Component({
  selector: 'app-cash-receipt',
  templateUrl: './cash_receipt.component.html'
})
export class CashReceiptComponent {

  constructor(private createCashReceipt: CreateCashReceiptUseCase) {}

  save(form: any) {
    this.createCashReceipt.execute(form).subscribe();
  }
}