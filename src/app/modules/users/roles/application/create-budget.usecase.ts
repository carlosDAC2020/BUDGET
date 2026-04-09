import { Injectable } from '@angular/core';
import { BudgetService } from '../infrastructure/budget.service';
import { Budget } from '../domain/budget.model';

@Injectable({ providedIn: 'root' })
export class CreateBudgetUseCase {

  constructor(private service: BudgetService) {}

  execute(data: Budget) {
    if (!data.name) {
      throw new Error('Nombre requerido');
    }

    if (data.amount <= 0) {
      throw new Error('Monto inválido');
    }

    return this.service.create(data);
  }
}