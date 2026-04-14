import { Injectable } from '@angular/core';
import { CenterCostService } from '../infrastructure/centroCost.service';
import { CenterCost } from '../domain/centerCost.model';

@Injectable({ providedIn: 'root' })
export class CreateCenterCostUseCase {

  constructor(private service: CenterCostService) {}

  execute(data: CenterCost) {
    return this.service.create(data);
  }
}