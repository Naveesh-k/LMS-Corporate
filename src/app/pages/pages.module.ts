import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';

@NgModule({
  declarations: [HomeComponent, ExploreComponent, MyCoursesComponent],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
