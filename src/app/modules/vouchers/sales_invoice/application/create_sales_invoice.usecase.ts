import { Injectable } from '@angular/core';
import { SalesInvoiceService } from '../infrastructure/sales_invoice.service';
import { SalesInvoice } from '../domain/sales_invoice.model';

@Injectable({ providedIn: 'root' })
export class  CreateSalesInvoiceUseCase {

  constructor(private service: SalesInvoiceService) {}

  execute(data: SalesInvoice) {
    return this.service.create(data);
  }
}