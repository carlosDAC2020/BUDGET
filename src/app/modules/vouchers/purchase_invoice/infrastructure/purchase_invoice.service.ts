import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { purchaseInvoice } from '../domain/purchase_invoice.model';
import { ApiService } from '../../../../core/services/api.service';

@Injectable({ providedIn: 'root' })
export class purchaseInvoiceService {

  constructor(private apiService: ApiService) {}

  create(data: purchaseInvoice) {
    return this.apiService.post('/purchase-invoices', data);
  }

  list() {
    return this.apiService.get<purchaseInvoice[]>('/purchase-invoices');
  }
}