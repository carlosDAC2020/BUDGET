import { Component, Input } from '@angular/core';
import { CreateCenterCostUseCase } from '../application/create-center-cost.usecase';
import { UpdateCenterCostUseCase } from '../application/update-center-cost.usecase';
import { ListCenterCostUseCase } from '../application/list-center-cost.usecase';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CenterCost } from '../domain/centerCost.model';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-center-cost',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './center_cost.component.html'
})
export class CenterCostComponent {
  
  @Input() data?: CenterCost;
  form!: FormGroup;
  isModalOpen = false;
  isSaving = false;
  isEdit = false;
  centerCosts$!: Observable<CenterCost[]>;

  constructor(
    private fb: FormBuilder,
    private createCenterCost: CreateCenterCostUseCase,
    private updateCenterCost: UpdateCenterCostUseCase,
    private listCenterCost: ListCenterCostUseCase
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadCenterCosts();
  }

  initForm(){
    this.isEdit = !!this.data;
    this.form = this.fb.group({
      codigo: [this.data?.codigo || '', Validators.required],
      nombre: [this.data?.nombre || '', Validators.required],
    });
  }

  loadCenterCosts() {
    this.centerCosts$ = this.listCenterCost.execute();
  }

  openModal(data?: CenterCost) {
    this.isEdit = !!data;

    this.form.patchValue({
        codigo: data?.codigo || '',
        nombre: data?.nombre || ''
    });

    this.isModalOpen = true;
  }

  editCenter(centerCost: CenterCost) {
      this.openModal(centerCost);
    }
  

  closeModal() {
    this.isModalOpen = false;
  }

  save() {
    if (this.form.invalid) return;

    this.isSaving = true;

    const payload: CenterCost = {
      ...this.form.value
    };

    const request = this.isEdit
      ? this.updateCenterCost.execute(payload)
      : this.createCenterCost.execute(payload);

    request.subscribe({
      next: () => {
        this.isSaving = false;
        this.closeModal();
      },
      error: () => {
        this.isSaving = false;
      }
    });
  }

}