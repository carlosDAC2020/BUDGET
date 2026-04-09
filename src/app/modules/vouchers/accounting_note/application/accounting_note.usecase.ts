import { Injectable } from '@angular/core';
import { AccountingNoteService } from '../infrastructure/accounting_note.service';
import { accounting_note } from '../domain/accounting_note.model';

@Injectable({ providedIn: 'root' })
export class CreateAccountingNoteUseCase {

  constructor(private service: AccountingNoteService) {}

  execute(data: accounting_note) {
    if (!data.name) {
      throw new Error('Nombre requerido');
    }

    if (data.amount <= 0) {
      throw new Error('Monto inválido');
    }

    return this.service.create(data);
  }
}