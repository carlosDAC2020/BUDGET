import { Component } from '@angular/core';
import { CreateSecurityUseCase } from '../application/create_security.usecase';

@Component({
  selector: 'app_security',
  templateUrl: './security_settings.component.html'
})
export class SecurityComponent {

  constructor(private createSecurity: CreateSecurityUseCase) {}

  save(form: any) {
    this.createSecurity.execute(form).subscribe();
  }
}