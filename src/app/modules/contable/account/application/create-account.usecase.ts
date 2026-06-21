import { Injectable } from '@angular/core';
import { AccountService } from '../infrastructure/account.service';
import { Account } from '../domain/account.model';

@Injectable({ providedIn: 'root' })
export class CreateAccountUseCase {

  constructor(private service: AccountService) {}

  execute(data: Account) {
    return this.service.create(data);
  }
}