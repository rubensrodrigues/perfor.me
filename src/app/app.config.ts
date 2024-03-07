import { JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { AppConstants } from './comum/app-constants';
import { LoginComponent } from './components/login/login.component';
import { HttpClient, HttpHandler, provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export function tokenGetter() {
  return localStorage.getItem(AppConstants.tokenName);
}
const options : JwtModuleOptions = {
  config: {
    tokenGetter: tokenGetter,
    allowedDomains: ["localhost"],
    disallowedRoutes: [""],
  },
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(JwtModule.forRoot(options)),
    LoginComponent,
    provideHttpClient(), provideAnimationsAsync()
  ]
};
