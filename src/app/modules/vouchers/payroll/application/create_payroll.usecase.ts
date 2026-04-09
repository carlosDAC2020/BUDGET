import { Injectable } from '@angular/core';
import { PayrollService } from '../infrastructure/payroll.service';
import { Payroll } from '../domain/payroll.model';

@Injectable({ providedIn: 'root' })
export class CreatePayrollUseCase {

  constructor(private service: PayrollService) {}

  execute(data: Payroll) {
    if (!data.name) {
      throw new Error('Nombre requerido');
    }

    if (data.amount <= 0) {
      throw new Error('Monto inválido');
    }

    return this.service.create(data);
  }
}