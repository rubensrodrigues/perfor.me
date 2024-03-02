import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private service: LoginService){

  }

  isLoggedin?: boolean;

  logout(){
    this.isLoggedin = false;
    this.service.logout();
  }
}
