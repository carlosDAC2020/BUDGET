import { Component } from '@angular/core';
import { CreateSettingsUseCase } from '../application/settings.usecase';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app_settings',
  templateUrl: './settings.component.html',
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ]
})
export class SettingsComponent {

  constructor(private createSettings: CreateSettingsUseCase) {}

  save(form: any) {
    this.createSettings.execute(form).subscribe();
  }
}