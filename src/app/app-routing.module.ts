import { CourseslistComponent } from './courseslist/courseslist.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostArticleComponent } from './admin/post-article/post-article.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'XtraCourse', component: WelcomeComponent },
  { path: 'XtraCourse/courses/list', component: CourseslistComponent },
  // { path: 'admin/PostArticle', component: PostArticleComponent },
  { path: '**', component: PageNotFoundComponent },

  //  PostArticleComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
