import { Injectable } from '@angular/core';
import { AccountService } from '../infrastructure/account.service';

@Injectable({ providedIn: 'root' })
export class ListAccountUseCase {

  constructor(private service: AccountService) {}

  execute() {
    return this.service.list();
  }
}