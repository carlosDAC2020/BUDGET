import { Injectable } from '@angular/core';
import { MovementsManagementService } from '../infrastructure/movements_management.service';

@Injectable({ providedIn: 'root' })
export class CreateMovementsManagementUseCase {

  constructor(private service: MovementsManagementService) {}

}