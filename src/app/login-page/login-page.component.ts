import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  email = '';
  link = '';
  password = '';
  constructor(private router: Router) {}
  passwordChanged(event: any) {
    this.password = event;
  }

  login() {
    // Aqui precisariamos fazer essa verificação no banco de dados
    if (this.email == 'manuzika@email.com' && this.password == '123') {
      // Isso evidentemente não é seguro, mas a ideia é bom e será melhorada no futuro
      sessionStorage.setItem('user', 'manuuuu');
      this.router.navigate(['/feed']);
    }
  }
}
