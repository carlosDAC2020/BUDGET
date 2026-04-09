import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login } from '../domain/login.model';

@Injectable({ providedIn: 'root' })
export class LoginService {

  constructor(private http: HttpClient) {}

  create(data: login) {
    return this.http.post('/logins', data);
  }

  list() {
    return this.http.get<login[]>('/logins');
  }
}