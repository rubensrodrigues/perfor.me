import { Injectable, inject } from '@angular/core';
import { AppConstants } from '../../comum/app-constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { IUser } from '../../models/iuser';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient,
    private router: Router) {
      this.localstorage = inject(DOCUMENT).defaultView?.localStorage;
    }

  localstorage: any;

  logout(){
    if(this.localstorage){

      localStorage.removeItem(AppConstants.tokenName);
      localStorage.removeItem('name');
      localStorage.clear();
      this.router.navigate(['login']);
    }
  }


  login(user: IUser){

    const headers = new HttpHeaders(
      {
          'Content-Type': 'application/json'
      }
    );

    // console.log(JSON.stringify(user));
    return this.httpClient.post<IUser>(AppConstants.loginUrl, JSON.stringify(user),{headers: headers, observe: 'response' });
  }
}
