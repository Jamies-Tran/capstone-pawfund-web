import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./welcome/feature/welcome.component').then(m => m.WelcomeComponent) },
  { path: 'login', loadComponent: () => import('./login/feature/login.component').then(m => m.LoginComponent) },
];
