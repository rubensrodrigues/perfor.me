import { DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LoginService } from './login.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card'
import {MatIconModule} from '@angular/material/icon'
import {FormBuilder, FormControlOptions, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppConstants } from '../../comum/app-constants';
import { Router } from '@angular/router';
import { IUser } from '../../models/iuser';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatToolbarModule, FormsModule, MatFormFieldModule, MatInputModule, MatCardModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private formBuilder: FormBuilder,
    private service: LoginService,
    private router:Router,
    ){

      this.localstorage = inject(DOCUMENT).defaultView?.localStorage;
      this.form = this.formBuilder.group({
        email: [null],
        password: [null]
      } as FormControlOptions);
  }

  form: FormGroup;
  isLoggedin?: boolean;
  localstorage: any;
  user: IUser = {
    _id: 0,
    name: "",
    phone:0,
    cpfCnpj:0,
    email: "",
    token: ""
  };

  onSubmit(){
    this.service.login(this.form.value).subscribe(response => {
      this.user =<IUser>response.body;
      if(this.localstorage){
        localStorage.setItem(AppConstants.tokenName, this.user.token);
        localStorage.setItem('name', this.user.name);
        this.router.navigate(['home']);
      }
    });
  }

  logout(){
    this.isLoggedin = false;
    this.service.logout();
  }
}
