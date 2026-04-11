import { Injectable } from '@angular/core';
import { accounting_note } from '../domain/accounting_note.model';
import { ApiService } from '../../../../core/services/api.service';

@Injectable({ providedIn: 'root' })
export class AccountingNoteService {

  constructor(private apiService: ApiService) {}

  create(data: accounting_note) {
    return this.apiService.post('/accounting-notes', data);
  }

  list() {
    return this.apiService.get<accounting_note[]>('/accounting-notes');
  }
}