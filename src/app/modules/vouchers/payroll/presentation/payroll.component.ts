import { Component } from '@angular/core';
import { CreatePayrollUseCase } from '../application/create_payroll.usecase';

@Component({
  selector: 'app_payroll',
  templateUrl: './payroll.component.html'
})
export class PayrollComponent {

  constructor(private createPayroll: CreatePayrollUseCase) {}

  save(form: any) {
    this.createPayroll.execute(form).subscribe();
  }
}