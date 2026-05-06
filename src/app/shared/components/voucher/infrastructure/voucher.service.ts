import { Injectable } from '@angular/core';
import { Voucher } from '../domain/voucher.model';
import { ApiService } from '../../../../core/services/api.service';

@Injectable({ providedIn: 'root' })
export class voucherService {

  constructor(private apiService: ApiService) {}

  create(data: Voucher) {
    return this.apiService.post('/vouchers', data);
  }

  list() {
    return this.apiService.get<Voucher[]>('/vouchers');
  }
}