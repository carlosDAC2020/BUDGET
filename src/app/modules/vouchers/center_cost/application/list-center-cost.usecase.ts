import { Injectable } from '@angular/core';
import { CenterCostService } from '../infrastructure/centroCost.service';
import { CenterCost } from '../domain/centerCost.model';

@Injectable({ providedIn: 'root' })
export class ListCenterCostUseCase {

  constructor(private service: CenterCostService) {}

  execute() {
    return this.service.list();
  }
}