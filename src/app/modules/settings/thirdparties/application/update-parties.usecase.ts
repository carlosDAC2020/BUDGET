import { Injectable } from '@angular/core';
import { PartiesService } from '../infrastructure/parties.service';
import { Party } from '../domain/parties.model';

@Injectable({ providedIn: 'root' })
export class UpdatePartiesUseCase {

  constructor(private service: PartiesService) {}

  execute(id: string, data: Partial<Party>) {
    return this.service.update(id, data);
  }
}