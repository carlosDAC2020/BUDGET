import { Component } from '@angular/core';
import { CreateCompanyUseCase } from '../application/create_company.usecase';

@Component({
  selector: 'app_company_settings',
  templateUrl: './company_settings.component.html'
})
export class CompanySettingsComponent {

  constructor(private createCompany: CreateCompanyUseCase) {}

  save(form: any) {
    this.createCompany.execute(form).subscribe();
  }
}