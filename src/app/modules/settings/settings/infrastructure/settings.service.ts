import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Settings } from '../domain/settings.model';

@Injectable({ providedIn: 'root' })
export class SettingsService {

  constructor(private http: HttpClient) {}

  create(data: Settings) {
    return this.http.post('/settings', data);
  }

  list() {
    return this.http.get<Settings[]>('/settings');
  }
}