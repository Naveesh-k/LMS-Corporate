import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DashboardComponent } from './login/dashboard/dashboard.component';
import { LoginComponent } from './login/login/login.component';
import{StretcherComponent}from './stretcher/stretcher.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  // { path: '', component: HomePageComponent},
  { path: 'home-page', component: HomePageComponent},
  {path:'stretcher',component:StretcherComponent },
  {
    path: 'login-module',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'pages',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
  { path: 'auth-module', loadChildren: () => import('./auth-pages/auth-pages.module').then(m => m.AuthPagesModule) },
  { path: '**', component: DashboardComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
