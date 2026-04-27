import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-entry',
  standalone: true,
  imports: [CommonModule, FormsModule, CurrencyPipe],
  templateUrl: './entry.component.html'
})
export class EntryComponent {

  @Input() title: string = 'Asiento Contable';
  @Input() data: any[] = [];
  @Output() onAdd = new EventEmitter<void>();
  @Output() onDelete = new EventEmitter<number>();

  remove(index: number) {
    this.onDelete.emit(index);
  }

}