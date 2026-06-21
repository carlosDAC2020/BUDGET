import { Injectable } from '@angular/core';
import { PeriodService } from '../infrastructure/period.service';
import { Period } from '../domain/period.model';

@Injectable({ providedIn: 'root' })
export class CreatePeriodUseCase {

  constructor(private service: PeriodService) {}

  execute(data: Period) {
    return this.service.create(data);
  }
}