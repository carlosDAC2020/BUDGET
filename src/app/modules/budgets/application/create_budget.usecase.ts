import { Injectable } from '@angular/core';
import { BudgetService } from '../infrastructure/budget.service';
import { Budget } from '../domain/budget.model';

@Injectable({ providedIn: 'root' })
export class CreateBudgetUseCase {

  constructor(private service: BudgetService) {}

  execute(data: Budget) {
    if (!data.anio) {
      throw new Error('Año requerido');
    }

    if (data.total <= 0) {
      throw new Error('Monto inválido');
    }

    if (data.fecha_ini >= new Date()) {
      throw new Error('Fecha de inicio inválida');
    }

    if (data.fecha_fin > new Date(data.anio, 11, 31) || data.fecha_fin <= data.fecha_ini) {
      throw new Error('Fecha de fin inválida');
    }

    return this.service.create(data);
  }
}