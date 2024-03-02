import { HomeComponent } from './components/home/home.component';
import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard]
  },
  {
    path: '',
    pathMatch: 'full', redirectTo: 'login'
  },
  {
    path: 'login',
    component:LoginComponent
  }
];
