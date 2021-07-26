import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './login/dashboard/dashboard.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'login-module',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
