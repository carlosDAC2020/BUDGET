import { Injectable } from '@angular/core';
import { Security } from '../domain/security.model';
import { ApiService } from '../../../../core/services/api.service';

@Injectable({ providedIn: 'root' })
export class SecurityService {

  constructor(private apiService: ApiService) {}

  create(data: Security) {
    return this.apiService.post('/security', data);
  }

  list() {
    return this.apiService.get<Security[]>('/security');
  }
}