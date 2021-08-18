import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DashboardComponent } from './login/dashboard/dashboard.component';
import { LoginComponent } from './login/login/login.component';
import{StretcherComponent}from './stretcher/stretcher.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import{VideoCallComponent}from'./video-call/video-call.component';
import{PeopleListComponent}from'./people-list/people-list.component';
const routes: Routes = [
  { path: '', component: DashboardComponent },
  // { path: '', component: HomePageComponent},
  { path: 'home-page', component: HomePageComponent},
  { path:'stretcher',component:StretcherComponent},
  {path:'chatbox',component:ChatBoxComponent},
  {path:'video-call',component:VideoCallComponent},
  {path:'people-list',component:PeopleListComponent},
 
  
 
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
