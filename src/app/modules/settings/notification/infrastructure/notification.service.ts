import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notification } from '../domain/notification.model';

@Injectable({ providedIn: 'root' })
export class NotificationService {

  constructor(private http: HttpClient) {}

  create(data: Notification) {
    return this.http.post('/notifications', data);
  }

  list() {
    return this.http.get<Notification[]>('/notifications');
  }
}