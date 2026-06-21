import { Injectable } from '@angular/core';
import { CenterCostService } from '../infrastructure/centroCost.service';

@Injectable({ providedIn: 'root' })
export class ListCenterCostUseCase {

  constructor(private service: CenterCostService) {}

  execute() {
    return this.service.list();
  }
}