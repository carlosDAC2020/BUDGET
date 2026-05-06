import { Component } from '@angular/core';
import { CreateSalesInvoiceUseCase } from '../application/create_sales_invoice.usecase';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EntryComponent } from '@shared/components/entry/presentation/entry.component';
import { VoucherComponent } from '@shared/components/voucher/presentation/voucher.component';
import { LoadingComponent } from '@shared/components/loading/loading.component';

@Component({
  selector: 'app-sales-invoice',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, EntryComponent, VoucherComponent, LoadingComponent],
  templateUrl: './sales_invoice.component.html'
})
export class SalesInvoiceComponent {

  isLoading = false;
  entries = [
  {
    cuenta: '',
    concepto: '',
    tercero: '',
    debito: 0,
    credito: 0
  }
  ];

  voucher = {
    id_tipo: 1,
    numero: '',
    fecha: new Date(),
    descripcion: '',
    estado: 'BORRADOR'
  };

  voucherTypes = [
    { id: 1, nombre: 'Factura de Venta' },
    { id: 2, nombre: 'Comprobante Diario' },
    { id: 3, nombre: 'Recibo de Caja' }
  ];

  constructor(private createSalesInvoice: CreateSalesInvoiceUseCase) {}

  save(form: any) {
    this.createSalesInvoice.execute(form).subscribe();
  }

  addEntry() {
    this.entries.push({
      cuenta: '',
      concepto: '',
      tercero: '',
      debito: 0,
      credito: 0
    });
  }

  deleteEntry(index: number) {
    this.entries.splice(index, 1);
  }
}