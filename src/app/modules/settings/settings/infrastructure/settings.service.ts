import { Injectable } from '@angular/core';
import { Settings } from '../domain/settings.model';
import { ApiService } from '../../../../core/services/api.service';

@Injectable({ providedIn: 'root' })
export class SettingsService {

  constructor(private apiService: ApiService) {}

  create(data: Settings) {
    return this.apiService.post('/settings', data);
  }

  list() {
    return this.apiService.get<Settings[]>('/settings');
  }
}