import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomiseTopicComponent } from './customise-topic/customise-topic.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'customise-topic', component: CustomiseTopicComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
