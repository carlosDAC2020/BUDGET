import { Component } from '@angular/core';
import { CreateBudgetUseCase } from '../application/create-budget.usecase';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  constructor(private createBudget: CreateBudgetUseCase) {}

  save(form: any) {
    this.createBudget.execute(form).subscribe();
  }
}