import { Injectable } from '@angular/core';
import { VoucherService } from '../infrastructure/voucher.service';

@Injectable({ providedIn: 'root' })
export class SaveVoucherUseCase {

  constructor(private service: VoucherService) {}

  execute(data: any) {
    return this.service.save(data);
  }
}