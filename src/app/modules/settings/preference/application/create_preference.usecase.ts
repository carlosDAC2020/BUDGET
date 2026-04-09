import { Injectable } from '@angular/core';
import { PreferenceService } from '../infrastructure/preference.service';
import { Preference } from '../domain/preference.model';

@Injectable({ providedIn: 'root' })
export class CreatePreferenceUseCase {

  constructor(private service: PreferenceService) {}

  execute(data: Preference) {
    if (!data.name) {
      throw new Error('Nombre requerido');
    }

    if (data.amount <= 0) {
      throw new Error('Monto inválido');
    }

    return this.service.create(data);
  }
}