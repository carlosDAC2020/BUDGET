import { Injectable } from '@angular/core';
import { login } from '../domain/login.model';
import { ApiService } from '../../../core/services/api.service';

@Injectable({ providedIn: 'root' })
export class LoginService {

  constructor(private apiService: ApiService) {}

  create(data: login) {
    return this.apiService.post('/logins', data);
  }

  list() {
    return this.apiService.get<login[]>('/logins');
  }
}