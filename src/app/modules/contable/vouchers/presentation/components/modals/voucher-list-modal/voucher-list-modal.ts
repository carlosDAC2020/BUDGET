import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-voucher-list-modal',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './voucher-list-modal.html',
  styleUrl: './voucher-list-modal.css',
  standalone: true
})
export class VoucherListModal {

  @Output()
  close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }

  vouchers = [

  {
    id_comprobante: 1,
    numero: 'COMP-001',
    tipo_comprobante: 'Factura Venta',
    factura_externa: 'FV-1001',
    fecha: '2026-05-08',
    estado: 'BORRADOR'
  },

  {
    id_comprobante: 2,
    numero: 'COMP-002',
    tipo_comprobante: 'Recibo Caja',
    factura_externa: 'RC-220',
    fecha: '2026-05-08',
    estado: 'APROBADO'
  }

];

}
