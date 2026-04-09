import { Component } from '@angular/core';
import { CreatePurchaseInvoiceUseCase } from '../application/create_purchase_invoice.usecase';

@Component({
  selector: 'app_purchase_invoice',
  templateUrl: './purchase_invoice.component.html'
})
export class PurchaseInvoiceComponent {

  constructor(private createPurchaseInvoice: CreatePurchaseInvoiceUseCase) {}

  save(form: any) {
    this.createPurchaseInvoice.execute(form).subscribe();
  }
}