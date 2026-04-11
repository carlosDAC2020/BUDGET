import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SalesInvoice } from '../domain/sales_invoice.model';
import { ApiService } from '../../../../core/services/api.service';

@Injectable({ providedIn: 'root' })
export class SalesInvoiceService {

  constructor(private apiService: ApiService) {}

  create(data: SalesInvoice) {
    return this.apiService.post('/sales-invoices', data);
  }

  list() {
    return this.apiService.get<SalesInvoice[]>('/sales-invoices');
  }
}