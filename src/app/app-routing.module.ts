import { CourseslistComponent } from './courseslist/courseslist.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostArticleComponent } from './admin/post-article/post-article.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'courses/list', component: CourseslistComponent },
  { path: 'admin/PostArticle', component: PostArticleComponent},
//  PostArticleComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
