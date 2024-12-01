import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  loginshow:boolean=false;

  constructor(private router: Router) {}

  login() {
    if (this.username === 'touchworld' && this.password === 'touchworldTech') {
      this.loginshow=true
      this.router.navigate(['/employee']);
      
    } else {
      alert('Invalid Username or Password');
    }
  }

}
