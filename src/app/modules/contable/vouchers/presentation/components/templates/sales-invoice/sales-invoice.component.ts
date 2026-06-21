import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPrintModule } from 'ngx-print';

@Component({
  selector: 'app-sales-invoice',
  standalone: true,
  imports: [ CommonModule, NgxPrintModule],
  templateUrl: './sales-invoice.component.html',
  styleUrls: ['./sales-invoice.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SalesInvoiceComponent {

  @Input({ required: true })
  data!: any;

  trackByIndex(index: number): number {
    return index;
    }

}