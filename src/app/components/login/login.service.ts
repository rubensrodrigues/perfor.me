import { Injectable } from '@angular/core';
import { AppConstants } from '../../comum/app-constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { IUser } from '../../models/iuser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient,
    private router: Router) { }

  logout(){
    window.localStorage.removeItem(AppConstants.tokenName);
    window.localStorage.removeItem('name');
    window.localStorage.clear();
    this.router.navigate(['login']);
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
