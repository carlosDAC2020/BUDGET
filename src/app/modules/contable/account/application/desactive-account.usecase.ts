import { Injectable } from '@angular/core';
import { AccountService } from '../infrastructure/account.service';
import { DesactiveAccount } from '../domain/account.model';

@Injectable({ providedIn: 'root' })
export class DesactiveAccountUseCase {

  constructor(private service: AccountService) {}

  execute(data: DesactiveAccount) {
    return this.service.desactive(data);
  }
}