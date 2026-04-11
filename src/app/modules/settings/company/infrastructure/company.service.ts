import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../domain/company.model';
import { ApiService } from '../../../../core/services/api.service';

@Injectable({ providedIn: 'root' })
export class CompanyService {

  constructor(private apiService: ApiService) {}

  update(data: FormData) {
    return this.apiService.put(`tenants/empresas/${data.get('id')}`, data);
  }

  list(id:number) {
    return this.apiService.get<Company[]>(`tenants/empresas/${id}`);
  }
}