import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { accounting_note } from '../domain/accounting_note.model';

@Injectable({ providedIn: 'root' })
export class AccountingNoteService {

  constructor(private http: HttpClient) {}

  create(data: accounting_note) {
    return this.http.post('/accounting-notes', data);
  }

  list() {
    return this.http.get<accounting_note[]>('/accounting-notes');
  }
}