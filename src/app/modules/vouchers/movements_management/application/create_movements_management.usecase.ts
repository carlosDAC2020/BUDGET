import { Injectable } from '@angular/core';
import { MovementsManagementService } from '../infrastructure/movements_management.service';
import { MovementsManagement } from '../domain/movements_management.model';

@Injectable({ providedIn: 'root' })
export class CreateMovementsManagementUseCase {

  constructor(private service: MovementsManagementService) {}

  execute(data: MovementsManagement) {
    if (!data.name) {
      throw new Error('Nombre requerido');
    }

    if (data.amount <= 0) {
      throw new Error('Monto inválido');
    }

    return this.service.create(data);
  }
}