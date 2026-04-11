import { Injectable } from '@angular/core';
import { Preference } from '../domain/preference.model';
import { ApiService } from '../../../../core/services/api.service';

@Injectable({ providedIn: 'root' })
export class PreferenceService {

  constructor(private apiService: ApiService) {}

  create(data: Preference) {
    return this.apiService.post('/preferences', data);
  }

  list() {
    return this.apiService.get<Preference[]>('/preferences');
  }
}