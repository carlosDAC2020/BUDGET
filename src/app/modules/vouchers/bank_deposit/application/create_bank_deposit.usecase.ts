import { Injectable } from '@angular/core';
import { BankDepositService } from '../infrastructure/bank_deposit.service';
import { BankDeposit } from '../domain/bank_deposit.model';

@Injectable({ providedIn: 'root' })
export class createBankDepositUseCase {

  constructor(private service: BankDepositService) {}

  execute(data: BankDeposit) {
    if (!data.name) {
      throw new Error('Nombre requerido');
    }

    if (data.amount <= 0) {
      throw new Error('Monto inválido');
    }

    return this.service.create(data);
  }
}