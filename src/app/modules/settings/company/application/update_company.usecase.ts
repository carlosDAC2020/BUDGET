import { Injectable } from '@angular/core';
import { CompanyService } from '../infrastructure/company.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({ providedIn: 'root' })
export class UpdateCompanyUseCase {

  constructor(private service: CompanyService) {}

  execute(data: FormData): Observable<any> {
    return this.service.update(data);
  }
}