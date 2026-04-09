import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { purchaseInvoice } from '../domain/purchase_invoice.model';

@Injectable({ providedIn: 'root' })
export class purchaseInvoiceService {

  constructor(private http: HttpClient) {}

  create(data: purchaseInvoice) {
    return this.http.post('/purchase-invoices', data);
  }

  list() {
    return this.http.get<purchaseInvoice[]>('/purchase-invoices');
  }
}