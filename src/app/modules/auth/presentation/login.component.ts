import { Component } from '@angular/core';
import { loginUseCase } from '../application/login.usecase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(private login: loginUseCase, private router: Router) {}

  save(form: any) {
    this.login.execute(form).subscribe();
  }

  onLogin(event: Event) {
        event.preventDefault();
        this.router.navigate(['/dashboard']);
    }

}