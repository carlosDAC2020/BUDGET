import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading.component.html'
})
export class LoadingComponent {
  @Input() text: string = 'Cargando...';
  @Input() fullScreen: boolean = false;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
}