import { Injectable, Type } from '@angular/core';
import { SalesInvoiceComponent } from '../components/templates/sales-invoice/sales-invoice.component';


@Injectable({
  providedIn: 'root'
})
export class VoucherTemplateService {

  private templates: Record<string, Type<any>> = {
    SALES_INVOICE: SalesInvoiceComponent
  };

  getTemplate(type: string): Type<any> {
    return this.templates[type];
  }

}