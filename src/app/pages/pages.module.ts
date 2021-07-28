import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';

// Import your library
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CoursePreviewComponent } from './course-preview/course-preview.component';
import { SettingComponent } from './setting/setting.component';
import { BoardComponent } from './board/board.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [HomeComponent, ExploreComponent, MyCoursesComponent, CoursePreviewComponent, SettingComponent, BoardComponent, ProfileComponent],
  imports: [CommonModule, PagesRoutingModule, SlickCarouselModule],
})
export class PagesModule {}
