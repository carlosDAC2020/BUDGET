import { Component } from '@angular/core';
import { CreateBudgetUseCase } from '../application/create-budget.usecase';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app_user_management',
  templateUrl: './user_management.component.html',
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ]
})
export class UserManagementComponent {

  constructor(private createBudget: CreateBudgetUseCase) {}

  save(form: any) {
    this.createBudget.execute(form).subscribe();
  }
}