import { Injectable } from '@angular/core';
import { Period } from '../domain/period.model';
import { ApiService } from '../../../../core/services/api.service';

@Injectable({ providedIn: 'root' })
export class PeriodService {

  constructor(private apiService: ApiService) {}

  create(data: Period) {
    return this.apiService.post('contable/periodos', data);
  }

  update(data: Period) {
    return this.apiService.put(`contable/periodos/${data.id}`, data);
  }

  list() {
    return this.apiService.get<Period[]>('contable/periodos');
  }
}