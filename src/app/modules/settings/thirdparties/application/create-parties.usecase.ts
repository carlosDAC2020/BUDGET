import { Injectable } from '@angular/core';
import { PartiesService } from '../infrastructure/parties.service';
import { Party } from '../domain/parties.model';

@Injectable({ providedIn: 'root' })
export class CreatePartiesUseCase {

  constructor(private service: PartiesService) {}

  execute(data: Party) {
    return this.service.create(data);
  }
}