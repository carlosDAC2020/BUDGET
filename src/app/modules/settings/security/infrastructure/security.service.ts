import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Security } from '../domain/security.model';

@Injectable({ providedIn: 'root' })
export class SecurityService {

  constructor(private http: HttpClient) {}

  create(data: Security) {
    return this.http.post('/security', data);
  }

  list() {
    return this.http.get<Security[]>('/security');
  }
}