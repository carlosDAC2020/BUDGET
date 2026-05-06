import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';

@Injectable({ providedIn: 'root' })
export class VoucherService {

  constructor(private apiService: ApiService) {}

  save(data: any) {
    return this.apiService.post('contable/comprobantes', data);
  }

}