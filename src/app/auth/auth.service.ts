import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private jwtHelper:JwtHelperService) { }

  isExpired(token:string):boolean{
    return this.jwtHelper.isTokenExpired(token);
  }
}
