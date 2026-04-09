import { Injectable } from '@angular/core';
import { LoginService } from '../infrastructure/login.service';
import { login } from '../domain/login.model';

@Injectable({ providedIn: 'root' })
export class loginUseCase {

  constructor(private service: LoginService) {}

  execute(data: login) {
    if (!data.username) {
      throw new Error('Nombre de usuario requerido');
    }

    if (!data.password) {
      throw new Error('Contraseña requerida');
    }

    if (!data.company) {
      throw new Error('Empresa requerida');
    }

    return this.service.create(data);
  }
}