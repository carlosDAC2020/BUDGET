import { Injectable } from '@angular/core';
import { UsersService } from '../infrastructure/users.service';
import { Users } from '../domain/user.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ListUserUseCase {

  constructor(private service: UsersService) {}

  execute(id: number): Observable<Users[]> {
    return this.service.list(id);
  }
}