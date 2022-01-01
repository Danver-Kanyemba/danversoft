import { Component } from '@angular/core';
import { fade, slide } from './animations';
import { VariablenamesService } from './service/variablenames.service';
import { NavigationEnd, Event, NavigationError, NavigationStart, Router } from '@angular/router';

import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from 'firebase/compat/app';
import { UserService } from './service/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fade,
    slide
  ]
})
export class AppComponent {
  isChecked: boolean= true;
  title = 'Danversoft Lab blog';

  website_Name: string = this.variableService.websiteName;

  isLoadingTheBar:boolean = false;

  constructor(public afAuth:AngularFireAuth,private router: Router,
    private variableService: VariablenamesService, private user_service: UserService){
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
          // Show loading indicator
          this.isLoadingTheBar = true;
          console.log("navigation started"+ this.isLoadingTheBar);

        }

        if (event instanceof NavigationEnd) {
          // Hide loading indicator
          this.isLoadingTheBar = false;
          console.log("navigation stoped"+ this.isLoadingTheBar);
        }

        if (event instanceof NavigationError) {
          // Hide loading indicator
          this.isLoadingTheBar = false;
          console.log("navigation error");

          // Present error to user
          console.log(event.error);
      }
  });
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
}
