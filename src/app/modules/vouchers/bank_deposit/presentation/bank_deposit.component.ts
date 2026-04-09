import { Component } from '@angular/core';
import { createBankDepositUseCase } from '../application/create_bank_deposit.usecase';

@Component({
  selector: 'app_bank_deposit',
  templateUrl: './bank_deposit.component.html'
})
export class BankDepositComponent {

  constructor(private createBankDeposit: createBankDepositUseCase) {}

  save(form: any) {
    this.createBankDeposit.execute(form).subscribe();
  }
}