import { Injectable } from '@angular/core';
import { Users } from '../domain/user.model';
import { ApiService } from '../../../../core/services/api.service';

@Injectable({ providedIn: 'root' })
export class UsersService {

  constructor(private apiService: ApiService) {}

  create(data: Users) {
    return this.apiService.post('security/user', data);
  }

  update(data: Users) {
    return this.apiService.put(`security/user`, data);
  }

  list(id: number) {
    return this.apiService.get<Users[]>(`security/empresa/${id}/user`);
  }
}