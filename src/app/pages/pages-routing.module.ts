import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { CoursePreviewComponent } from './course-preview/course-preview.component';
import { ExploreComponent } from './explore/explore.component';
import { HomeComponent } from './home/home.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'my-course', component: MyCoursesComponent },
  { path: 'course-preview', component: CoursePreviewComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'board', component: BoardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
