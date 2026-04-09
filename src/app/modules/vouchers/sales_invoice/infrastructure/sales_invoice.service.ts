import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SalesInvoice } from '../domain/sales_invoice.model';

@Injectable({ providedIn: 'root' })
export class SalesInvoiceService {

  constructor(private http: HttpClient) {}

  create(data: SalesInvoice) {
    return this.http.post('/sales-invoices', data);
  }

  list() {
    return this.http.get<SalesInvoice[]>('/sales-invoices');
  }
}