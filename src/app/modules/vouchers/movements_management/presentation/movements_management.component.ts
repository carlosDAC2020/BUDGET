import { Component } from '@angular/core';
import { CreateMovementsManagementUseCase } from '../application/create_movements_management.usecase';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app_movements_management',
  templateUrl: './movements_management.component.html',
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ]
})
export class MovementsManagementComponent {

  constructor(private createMovementsManagement: CreateMovementsManagementUseCase) {}

  save(form: any) {
    this.createMovementsManagement.execute(form).subscribe();
  }
}