import { Injectable } from '@angular/core';
import { voucherService } from '../infrastructure/voucher.service';
import { Voucher } from '../domain/voucher.model';

@Injectable({ providedIn: 'root' })
export class CreateVoucherUseCase {

  constructor(private service: voucherService) {}

  execute(data: Voucher) {
    return this.service.create(data);
  }
}