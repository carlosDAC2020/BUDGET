import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-movements-management',
  templateUrl: './movements_management.component.html',
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ]
})
export class MovementsManagementComponent {

  constructor() {}

}