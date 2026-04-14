import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Period } from '../domain/period.model';
import { ReactiveFormsModule } from '@angular/forms';
import { CreatePeriodUseCase } from '../application/create-period.usecase';
import { UpdatePeriodUseCase } from '../application/update-period.usecase';
import { listPeriodUseCase } from '../application/list-period.usecase';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-period',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './period.component.html'
})
export class PeriodComponent implements OnInit{

   @Input() data?: Period;
    form!: FormGroup;
    isModalOpen = false;
    isSaving = false;
    isEdit = false;
    periods$!: Observable<Period[]>;

  constructor(
    private fb: FormBuilder,
    private createPeriod: CreatePeriodUseCase,
    private updatePeriod: UpdatePeriodUseCase,
    private listPeriod: listPeriodUseCase
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadPeriods();
    }
  
  openModal(data?: Period) {
    this.isEdit = !!data;
  
    this.form.patchValue({
      anio: data?.anio || '',
      mes: data?.mes || '',
      fecha_inicio: data?.fecha_inicio || '',
      fecha_fin: data?.fecha_fin || '',
      cerrado: data?.cerrado ?? false
    });
  
    this.isModalOpen = true;
  }
  
  closeModal() {
    this.isModalOpen = false;
  }

  initForm(){
      this.isEdit = !!this.data;
  
      this.form = this.fb.group({
        anio: [this.data?.anio || '', Validators.required],
        mes: [this.data?.mes || '', Validators.required],
        fecha_inicio: [this.data?.fecha_inicio || '', Validators.required],
        fecha_fin: [this.data?.fecha_fin || '', Validators.required],
        cerrado: [this.data?.cerrado ?? false]
      });
    }
  
    loadPeriods() {
      this.periods$ = this.listPeriod.execute();
    }
  
    editAccount(period: Period) {
      this.openModal(period);
    }
  
    toggleStatus(period: Period) {
  
      const updated = {
      ...period,
      cerrado: !period.cerrado
    };
  
    this.updatePeriod.execute(updated).subscribe(() => {
      this.loadPeriods();
    });
  }
  
  save() {
    if (this.form.invalid) return;
  
    this.isSaving = true;
  
    const payload: Period = {
      ...this.form.value
    };
  
    const request = this.isEdit
      ? this.updatePeriod.execute(payload)
      : this.createPeriod.execute(payload);
  
    request.subscribe({
      next: () => {
        this.isSaving = false;
        this.loadPeriods();
        this.closeModal();
      },
      error: () => {
        this.isSaving = false;
      }
    });
  }

}