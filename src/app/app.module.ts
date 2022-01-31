import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBadgeModule } from '@angular/material/badge';
import {MatSidenavModule} from '@angular/material/sidenav'; 

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FooterdownComponent } from './footerdown/footerdown.component';
import { LoadingbarService } from './service/loadingbar.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';

import { PostArticleComponent } from './admin/post-article/post-article.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CourseslistComponent } from './courseslist/courseslist.component';
import { DialogCoursesComponent } from './dialog-courses/dialog-courses.component';
import { BoxesComponent } from './boxes/boxes.component';
import { SponseredLinksComponent } from './sponsered-links/sponsered-links.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    FooterdownComponent,
    PostArticleComponent,
    WelcomeComponent,
    CourseslistComponent,
    DialogCoursesComponent,
    BoxesComponent,
    SponseredLinksComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatStepperModule,
    MatDialogModule,
    MatDividerModule,
    MatChipsModule,
    MatRippleModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatSidenavModule
  ],
  providers: [LoadingbarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
