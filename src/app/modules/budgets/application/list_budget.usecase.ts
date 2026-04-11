import { Injectable } from '@angular/core';
import { BudgetService } from '../infrastructure/budget.service';

@Injectable({ providedIn: 'root' })
export class ListBudgetUseCase {

  constructor(private service: BudgetService) {}

  execute() {
    return this.service.list();
  }
}