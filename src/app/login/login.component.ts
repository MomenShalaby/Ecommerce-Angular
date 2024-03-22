import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  handleSubmitForm(loginForm: any) {
    console.log(loginForm);
  }
  // login() {
  //   // Implement your login logic here
  //   console.log('Logging in with:', this.email, this.password);
  // }
}
