import { Injectable } from '@angular/core';
import { NotificationService } from '../infrastructure/notification.service';
import { Notification } from '../domain/notification.model';

@Injectable({ providedIn: 'root' })
export class CreateNotificationUseCase {

  constructor(private service: NotificationService) {}

  execute(data: Notification) {
    if (!data.name) {
      throw new Error('Nombre requerido');
    }

    if (data.amount <= 0) {
      throw new Error('Monto inválido');
    }

    return this.service.create(data);
  }
}