import { Component } from '@angular/core';
import { fade, slide } from './animations';
import { VariablenamesService } from './service/variablenames.service';
import {
  NavigationEnd,
  Event,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { Title } from '@angular/platform-browser';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { UserService } from './service/user.service';
import { CourseListService } from './service/course-list.service';
import { SelectedCoursesService } from './service/selected-courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fade, slide],
})
export class AppComponent {
  isChecked: boolean = true;
  title = 'Danversoft';

  website_Name: string = this.variableService.websiteName;

  course_no: number = 0;
  selected_course2: any;

  selected_courses_list: any = [];


  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private variableService: VariablenamesService,
    private user_service: UserService,
    private selected_courses_service: SelectedCoursesService,
    private titleService: Title,
  ) {
    
  }
  
  ngOnInit(): void {
    // this.selected_courses_service.course_selected_num.subscribe(

    // )
    this.selected_course2 = this.selected_courses_service.course_selected_num;
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.selected_courses_list = this.selected_courses_service.select_these_ones;


    this.titleService.setTitle('XtraCourse');
 
 
    let path: any = document.querySelector('path');
    let pathLength = path.getTotalLength();
  
    path.style.strokeDasharray = pathLength + '  ' + pathLength;
    path.style.strokeDashoffset = pathLength
  
    window.addEventListener('scroll', ()=>{
      
      var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
      
      var drawLength = pathLength * scrollPercentage;
  
      path.style.strokeDashoffset = pathLength - drawLength;
    })
  }

  remove_from_list(course_select: any) {
    this.selected_courses_service.delete(course_select);
  }

  async signIn() {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(googleAuthProvider);
    console.log(credential.user);
    await this.user_service.updateUserData(credential.user);
  }

  signOut() {
    this.afAuth.signOut();
    this.router.navigate(['/']);
  }
  openDanversoftOfficial() {
    window.open('https://danver-kanyemba.github.io/');
  }



  

}
