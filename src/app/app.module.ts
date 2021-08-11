import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

// Import your library
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule } from '@angular/forms';

import { PagesModule } from './pages/pages.module';
import { QueStionComponent } from '../pages/que-stion/que-stion.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StretcherComponent } from './stretcher/stretcher.component';

@NgModule({
  declarations: [AppComponent, SidebarComponent, QueStionComponent, HomePageComponent, StretcherComponent],
  imports: [BrowserModule, AppRoutingModule, SlickCarouselModule, FormsModule, PagesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
