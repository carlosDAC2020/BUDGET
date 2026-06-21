import { Injectable } from '@angular/core';
import { ApiService } from '../../../../core/services/api.service';
import { ListVoucher } from '../domain/voucher.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class VoucherService {

  constructor(private apiService: ApiService) {}

  save(data: any) {
    return this.apiService.post('contable/comprobantes', data);
  }

  list(): Observable<ListVoucher[]> {
    return this.apiService.get('contable/comprobantes');
  }

}