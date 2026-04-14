import { Injectable } from '@angular/core';
import { MovementsManagementService } from '../infrastructure/movements_management.service';
import { MovementsManagement } from '../domain/movements_management.model';

@Injectable({ providedIn: 'root' })
export class CreateMovementsManagementUseCase {

  constructor(private service: MovementsManagementService) {}

  execute(data: MovementsManagement) {
    return this.service.create(data);
  }
}