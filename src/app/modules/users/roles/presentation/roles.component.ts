import { Component } from '@angular/core';
import { CreateBudgetUseCase } from '../application/create-budget.usecase';

@Component({
  selector: 'app_roles',
  templateUrl: './roles.component.html'
})
export class RolesComponent {

  constructor(private createBudget: CreateBudgetUseCase) {}

  save(form: any) {
    this.createBudget.execute(form).subscribe();
  }
}