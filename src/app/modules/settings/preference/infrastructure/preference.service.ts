import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Preference } from '../domain/preference.model';

@Injectable({ providedIn: 'root' })
export class PreferenceService {

  constructor(private http: HttpClient) {}

  create(data: Preference) {
    return this.http.post('/preferences', data);
  }

  list() {
    return this.http.get<Preference[]>('/preferences');
  }
}