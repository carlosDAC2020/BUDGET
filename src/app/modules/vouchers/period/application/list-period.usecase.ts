import { Injectable } from '@angular/core';
import { PeriodService } from '../infrastructure/period.service';

@Injectable({ providedIn: 'root' })
export class listPeriodUseCase {

  constructor(private service: PeriodService) {}

  execute() {
    return this.service.list();
  }
}