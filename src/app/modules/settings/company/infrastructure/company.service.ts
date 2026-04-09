import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../domain/company.model';

@Injectable({ providedIn: 'root' })
export class CompanyService {

  constructor(private http: HttpClient) {}

  create(data: Company) {
    return this.http.post('/companies', data);
  }

  list() {
    return this.http.get<Company[]>('/companies');
  }
}