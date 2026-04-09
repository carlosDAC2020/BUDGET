import { Component } from '@angular/core';
import { CreateBudgetUseCase } from '../application/create-budget.usecase';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html'
})
export class ModulesComponent {

  constructor(private createBudget: CreateBudgetUseCase) {}

  save(form: any) {
    this.createBudget.execute(form).subscribe();
  }
}