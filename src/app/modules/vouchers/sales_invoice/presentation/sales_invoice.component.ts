import { Component } from '@angular/core';
import { CreateSalesInvoiceUseCase } from '../application/create_sales_invoice.usecase';

@Component({
  selector: 'app_sales_invoice',
  templateUrl: './sales_invoice.component.html'
})
export class SalesInvoiceComponent {

  constructor(private createSalesInvoice: CreateSalesInvoiceUseCase) {}

  save(form: any) {
    this.createSalesInvoice.execute(form).subscribe();
  }
}