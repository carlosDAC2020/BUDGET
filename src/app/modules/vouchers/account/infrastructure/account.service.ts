import { Injectable } from '@angular/core';
import { Account, DesactiveAccount } from '../domain/account.model';
import { ApiService } from '../../../../core/services/api.service';

@Injectable({ providedIn: 'root' })
export class AccountService {

  constructor(private apiService: ApiService) {}

  create(data: Account) {
    return this.apiService.post('contable/cuentas', data);
  }

  update(data: Account) {
    return this.apiService.put(`contable/cuentas/${data.id}`, data);
  }

  list() {
    return this.apiService.get<Account[]>('contable/cuentas');
  }

  desactive(data: DesactiveAccount) {
    return this.apiService.put(`contable/cuentas/desactivar`, data);
  }
}