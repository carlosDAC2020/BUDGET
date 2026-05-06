import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Voucher } from '../domain/voucher.model';

@Component({
  selector: 'app-voucher',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './voucher.component.html'
})
export class VoucherComponent {

  @Input() title: string = '';
  @Input() voucher!: Voucher;
  @Input() voucherTypes: any[] = [];

  onDateChange(value: string) {
    this.voucher.fecha = value ? new Date(value) : null as any;
  }

  
}