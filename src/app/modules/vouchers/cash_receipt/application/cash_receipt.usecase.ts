import { Injectable } from '@angular/core';
import { CashReceiptService } from '../infrastructure/cash_receipt.service';
import { CashReceipt } from '../domain/cash_receipt.model';

@Injectable({ providedIn: 'root' })
export class CreateCashReceiptUseCase {

  constructor(private service: CashReceiptService) {}

  execute(data: CashReceipt) {
    if (!data.name) {
      throw new Error('Nombre requerido');
    }

    if (data.amount <= 0) {
      throw new Error('Monto inválido');
    }

    return this.service.create(data);
  }
}