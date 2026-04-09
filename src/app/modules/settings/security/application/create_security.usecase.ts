import { Injectable } from '@angular/core';
import { SecurityService } from '../infrastructure/security.service';
import { Security } from '../domain/security.model';

@Injectable({ providedIn: 'root' })
export class CreateSecurityUseCase {

  constructor(private service: SecurityService) {}

  execute(data: Security) {
    if (!data.name) {
      throw new Error('Nombre requerido');
    }

    if (data.amount <= 0) {
      throw new Error('Monto inválido');
    }

    return this.service.create(data);
  }
}