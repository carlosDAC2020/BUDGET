import { Component } from '@angular/core';
import { CreateAccountingNoteUseCase } from '../application/accounting_note.usecase';

@Component({
  selector: 'app-accounting-note',
  templateUrl: './accounting_note.component.html'
})
export class AccountingNoteComponent {

  constructor(private createAccountingNote: CreateAccountingNoteUseCase) {}

  save(form: any) {
    this.createAccountingNote.execute(form).subscribe();
  }
}