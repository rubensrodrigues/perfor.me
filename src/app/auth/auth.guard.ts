import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { LoginComponent } from '../components/login/login.component';
import { AppConstants } from '../comum/app-constants';
import { DOCUMENT } from '@angular/common';

export const authGuard: CanActivateFn = (route, state) => {

  let _authService= inject(AuthService);
  let _loginComponent= inject(LoginComponent);

  let _document = inject(DOCUMENT);

  const localstorage = _document.defaultView?.localStorage;
  if(localstorage){
    const token = localStorage.getItem(AppConstants.tokenName);
    if(token && !_authService.isExpired(token)){
      return true;
    }else{
      _loginComponent.logout();
      // _router.navigate(['login']);
    }
  }

  return false;
};
