import { Component } from '@angular/core';
import { CreateNotificationUseCase } from '../application/create_notification.usecase';

@Component({
  selector: 'app_notification_settings',
  templateUrl: './notification_settings.component.html'
})
export class notificationSettingsComponent {

  constructor(private createNotification: CreateNotificationUseCase) {}

  save(form: any) {
    this.createNotification.execute(form).subscribe();
  }
}