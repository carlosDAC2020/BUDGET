import { Component } from '@angular/core';
import { CreateBudgetUseCase } from '../application/create-budget.usecase';

@Component({
  selector: 'app_users',
  templateUrl: './users.component.html'
})
export class UsersComponent {

  constructor(private createBudget: CreateBudgetUseCase) {}

  save(form: any) {
    this.createBudget.execute(form).subscribe();
  }
}