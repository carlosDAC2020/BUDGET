import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-button',
    standalone: true,
    template: `
    <button [type]="type" [disabled]="disabled" (click)="onClick($event)" [class]="customClass">
      <ng-content></ng-content>
    </button>
  `,
    styles: [`
    button {
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 500;
      transition: all 0.2s;
    }
    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `]
})
export class ButtonComponent {
    @Input() type: 'button' | 'submit' = 'button';
    @Input() disabled = false;
    @Input() customClass = '';
    @Output() clicked = new EventEmitter<MouseEvent>();

    onClick(event: MouseEvent) {
        this.clicked.emit(event);
    }
}
