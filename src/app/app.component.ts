import { Component } from '@angular/core';
import { fade, slide } from './animations';
import { VariablenamesService } from './service/variablenames.service';
import { NavigationEnd, Event, NavigationError, NavigationStart, Router } from '@angular/router';
import { Title } from "@angular/platform-browser";

import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from 'firebase/compat/app';
import { UserService } from './service/user.service';
import { CourseListService } from './service/course-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fade,
    slide,
    
  ]
})
export class AppComponent {
  isChecked: boolean= true;
  title = 'Danversoft Lab blog';

  website_Name: string = this.variableService.websiteName;

  isLoadingTheBar:boolean = false;
  course_no: number=0;


  constructor(public afAuth:AngularFireAuth,private router: Router,
    private variableService: VariablenamesService, private user_service: UserService,
    private course_num: CourseListService, private titleService:Title
    ){
}


ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.course_no = this.course_num.course_number;
  this.titleService.setTitle('Danver Soft Learning')
}

async signIn(){
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  const credential = await this.afAuth.signInWithPopup(googleAuthProvider);
  console.log(credential.user);
  await this.user_service.updateUserData(credential.user)

}

signOut(){
  this.afAuth.signOut();
  this.router.navigate(['/']);
}
openDanversoftOfficial(){
  window.open("https://danver-kanyemba.github.io/")
}
}