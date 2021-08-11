import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistersComponent } from './registers/registers.component';



const routes: Routes = 

[
  // {path:'', component:SignUpComponent},
  { path: 'login', component: LoginComponent },
  {path:'registers',component: RegistersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthPagesRoutingModule { }
