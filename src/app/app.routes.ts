import { Routes } from '@angular/router';
import HomeComponent from './pages/home/home.component';
import LoginComponent from './pages/login/login.component';
import RegisterComponent from './pages/register/register.component';
import PasswordResetComponent from './pages/password-reset/password-reset.component';

export const routes: Routes = [
  { path: '', loadComponent: () => HomeComponent },
  { path: 'home', loadComponent: () => HomeComponent },
  { path: 'login', loadComponent: () => LoginComponent },
  { path: 'register', loadComponent: () => RegisterComponent },
  { path: 'password-reset', loadComponent: () => PasswordResetComponent },
];
