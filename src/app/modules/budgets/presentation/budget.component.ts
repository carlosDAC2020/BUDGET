import { Component, OnInit } from '@angular/core';
import { CreateBudgetUseCase } from '../application/create_budget.usecase';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListBudgetUseCase } from '../application/list_budget.usecase';
import { map, Observable } from 'rxjs';
import { Budget, BudgetResponse } from '../domain/budget.model';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app_budget',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './budget.component.html'
})
export class BudgetComponent implements OnInit {

  isModalOpen = false;
  budgetForm!: FormGroup;
  budgets$!: Observable<Budget[]>;
  stats$!: Observable<any>;
  isSaving = false;

  constructor(
    private listBudget: ListBudgetUseCase,
    private createBudget: CreateBudgetUseCase,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadBudgets();
  }

  initForm() {
    this.budgetForm = this.fb.group({
      fecha_ini: [],
      fecha_fin: [],
      anio: [],
      total: [],
      moneda: [],
      is_active: [true]
    });
  }

  loadBudgets() {
    const response$ = this.listBudget.execute().pipe(
      shareReplay(1)
    );

    this.budgets$ = response$.pipe(
      map((response: BudgetResponse) =>
        response.budgets.map((b: any) => ({
          ...b,
          fecha_ini: new Date(b.fecha_ini),
          fecha_fin: new Date(b.fecha_fin),
          total: Number(b.total)
        }))
      )
    );

    this.stats$ = response$.pipe(
      map((response: BudgetResponse) => response.stats)
    );
  }

  save(event?: Event) {

    event?.stopPropagation();

    if (this.budgetForm.invalid || this.isSaving) return;

    this.isSaving = true;

    const form = this.budgetForm.value;

    this.createBudget.execute(form).subscribe({
      next: () => {
        this.isModalOpen = false;
        this.isSaving = false;
        this.budgetForm.reset({
        is_active: true
      });
        this.loadBudgets();
      },
      error: (err) => {
        console.error(err);
        this.isSaving = false;
      }
    });
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  formatDate(date: Date) {
    return date ? date.toISOString().split('T')[0] : '';
  }
}
