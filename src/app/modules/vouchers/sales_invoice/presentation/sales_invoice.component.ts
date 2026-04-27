import { Component } from '@angular/core';
import { CreateSalesInvoiceUseCase } from '../application/create_sales_invoice.usecase';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EntryComponent } from '@shared/components/entry/presentation/entry.component';
import { LoadingComponent } from '@shared/components/loading/loading.component';

@Component({
  selector: 'app-sales-invoice',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, EntryComponent, LoadingComponent],
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