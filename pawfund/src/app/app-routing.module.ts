import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from 'src/share/ui/not-found.component';
import { HomepageLayoutComponent } from '../share/ui/home-page-layout.component';
import { ProfileComponent } from './register/feature/profile.component';

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
        path: '',
        component: ProfileComponent,
        children: [
            { path: 'profile', loadComponent: () => import('./register/feature/profile-detail.component').then(m => m.ProfileDetailComponent) },
            { path: 'shelter-register', loadComponent: () => import('./shelter/feature/shelter-register.component').then(m => m.ShelterRegisterComponent) },
        ]
      },
      {
        path: 'staff', loadComponent: () => import('./staff/feature/staff.component').then(m => m.StaffComponent)
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
