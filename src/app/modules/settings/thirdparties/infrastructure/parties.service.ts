import { Injectable } from '@angular/core';
import { Party } from '../domain/parties.model';
import { ApiService } from '../../../../core/services/api.service';

@Injectable({ providedIn: 'root' })
export class PartiesService {

  constructor(private apiService: ApiService) {}

  create(data: Party) {
    return this.apiService.post('tenants/terceros', data);
  }

  list() {
    return this.apiService.get<Party[]>('tenants/terceros');
  }

  update(id: string, data: Partial<Party>) {
    return this.apiService.put<Party>(`tenants/terceros/${id}`, data);
  }

}