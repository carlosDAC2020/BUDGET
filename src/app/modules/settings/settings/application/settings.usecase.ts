import { Injectable } from '@angular/core';
import { SettingsService } from '../infrastructure/settings.service';
import { Settings } from '../domain/settings.model';

@Injectable({ providedIn: 'root' })
export class CreateSettingsUseCase {

  constructor(private service: SettingsService) {}

  execute(data: Settings) {
    if (!data.name) {
      throw new Error('Nombre requerido');
    }

    if (data.amount <= 0) {
      throw new Error('Monto inválido');
    }

    return this.service.create(data);
  }
}