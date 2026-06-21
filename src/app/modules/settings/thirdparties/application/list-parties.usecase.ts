import { Injectable } from '@angular/core';
import { PartiesService } from '../infrastructure/parties.service';

@Injectable({ providedIn: 'root' })
export class ListPartiesUseCase {

  constructor(private service: PartiesService) {}

  execute() {
    return this.service.list();
  }
}