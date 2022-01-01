import { Injectable } from '@angular/core';
import { NavigationEnd, Event, NavigationError, NavigationStart, Router } from '@angular/router';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoadingbarService {
  // isLoading:boolean= false;


  // loadingbarVisibilityChange: Subject<boolean> = new Subject<boolean>();

  constructor(private router: Router) {
    
  //   this.loadingbarVisibilityChange.subscribe((value) => {
  //     this.isLoading = value
  // });

    // this.router.events.subscribe((event: Event) => {
    //     if (event instanceof NavigationStart) {
    //         // Show loading indicator
    //         this.isLoading = true;
    //         console.log("navigation started"+ this.isLoading);
            
    //       }
          
    //       if (event instanceof NavigationEnd) {
    //         // Hide loading indicator
    //         // this.isLoading = false;
    //         console.log("navigation stoped"+ this.isLoading);
    //       }
          
    //       if (event instanceof NavigationError) {
    //         // Hide loading indicator
    //         // this.isLoading = false;
    //         console.log("navigation error");
            
    //         // Present error to user
    //         console.log(event.error);
    //     }
    // });

}

// get isNavigationChanged(){
//   return this.isLoading;
// }
// toggleLoadingBarVisibilty() {
  
// }

}
