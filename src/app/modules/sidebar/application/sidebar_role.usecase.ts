import { Injectable } from '@angular/core';
import { SidebarService } from '../infrastructure/sidebar.service';

@Injectable({ providedIn: 'root' })
export class SidebarRoleUseCase {

  constructor(private service: SidebarService) {}

  execute() {
    return this.service.list();
  }
}