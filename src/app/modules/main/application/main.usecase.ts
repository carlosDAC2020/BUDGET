import { Injectable } from '@angular/core';
import { MainService } from '../infrastructure/main.service';

@Injectable({ providedIn: 'root' })
export class MainUseCase {

  constructor(private service: MainService) {}

  execute() {
    return this.service.list();
  }
}