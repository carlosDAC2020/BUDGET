import { Injectable } from '@angular/core';
import { CompanyService } from '../infrastructure/company.service';
import { Company } from '../domain/company.model';

@Injectable({ providedIn: 'root' })
export class CreateCompanyUseCase {

  constructor(private service: CompanyService) {}

  execute(data: Company) {
    if (!data.name) {
      throw new Error('Nombre requerido');
    }

    if (data.amount <= 0) {
      throw new Error('Monto inválido');
    }

    return this.service.create(data);
  }
}