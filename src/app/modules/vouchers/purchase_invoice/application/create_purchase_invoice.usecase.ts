import { Injectable } from '@angular/core';
import { purchaseInvoiceService } from '../infrastructure/purchase_invoice.service';
import { purchaseInvoice } from '../domain/purchase_invoice.model';

@Injectable({ providedIn: 'root' })
export class CreatePurchaseInvoiceUseCase {

  constructor(private service: purchaseInvoiceService) {}

  execute(data: purchaseInvoice) {
    if (!data.name) {
      throw new Error('Nombre requerido');
    }

    if (data.amount <= 0) {
      throw new Error('Monto inválido');
    }

    return this.service.create(data);
  }
}