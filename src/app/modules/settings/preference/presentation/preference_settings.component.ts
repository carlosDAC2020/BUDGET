import { Component } from '@angular/core';
import { CreatePreferenceUseCase } from '../application/create_preference.usecase';

@Component({
  selector: 'app_preference',
  templateUrl: './preference_settings.component.html'
})
export class PreferenceComponent {

  constructor(private createPreference: CreatePreferenceUseCase) {}

  save(form: any) {
    this.createPreference.execute(form).subscribe();
  }
}