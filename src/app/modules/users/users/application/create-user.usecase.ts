import { Injectable } from '@angular/core';
import { UsersService } from '../infrastructure/users.service';
import { Users } from '../domain/user.model';

@Injectable({ providedIn: 'root' })
export class CreateUserUseCase {

  constructor(private service: UsersService) {}

  execute(data: Users) {
    return this.service.create(data);
  }
}