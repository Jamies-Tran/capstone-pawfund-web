import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from 'src/share/ui/not-found.component';
import { HomepageLayoutComponent } from '../share/ui/home-page-layout.component';

const routes: Routes = [
  { path: '', loadComponent: () => import('./welcome/feature/welcome.component').then(m => m.WelcomeComponent) },
  { path: 'login', loadComponent: () => import('./login/feature/login.component').then(m => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('./register/feature/register.component').then(m => m.RegisterComponent) },
  { path: 'homepage', loadComponent: () => import('../share/ui/home-page-layout.component').then(m => m.HomepageLayoutComponent) },
  { path: 'verify', loadComponent: () => import('./register/feature/verify-account.component').then(m => m.VerifyAccountComponent) },
  {
    path: '',
    component: HomepageLayoutComponent,
    children: [
      {
        path: 'profile', loadComponent: () => import('./register/feature/profile.component').then(m => m.ProfileComponent)
      },
    ],
  },
  { path: 'none', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
