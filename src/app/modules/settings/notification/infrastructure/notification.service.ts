import { Injectable } from '@angular/core';
import { Notification } from '../domain/notification.model';
import { ApiService } from '../../../../core/services/api.service';

@Injectable({ providedIn: 'root' })
export class NotificationService {

  constructor(private apiService: ApiService) {}

  create(data: Notification) {
    return this.apiService.post('/notifications', data);
  }

  list() {
    return this.apiService.get<Notification[]>('/notifications');
  }
}