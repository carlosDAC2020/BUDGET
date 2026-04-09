import { Component } from '@angular/core';
import { CreateBudgetUseCase } from '../application/create-budget.usecase';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html'
})
export class BudgetComponent {

  constructor(private createBudget: CreateBudgetUseCase) {}

  save(form: any) {
    this.createBudget.execute(form).subscribe();
  }
}