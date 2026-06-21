import { Injectable } from '@angular/core';
import { VoucherService } from '../infrastructure/voucher.service';

@Injectable({ providedIn: 'root' })
export class listVoucherUseCase {

  constructor(private service: VoucherService) {}

  execute() {
    return this.service.list();
  }
}