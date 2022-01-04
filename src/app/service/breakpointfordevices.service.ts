import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreakpointfordevicesService {

  get onInCurrentGridwith3(){
    return (window.innerWidth <= 514) ? 1 : 3;

  }
  get onInCurrentGridwith5(){
    return (window.innerWidth <= 514) ? 1 : 5;

  }
  get onInCurrentGridwith2(){
    return  (window.innerWidth <= 832) ? 1 : 2;

  }

  get showboxes(){
    return  (window.innerWidth <= 468) ? 0 : 1;
  }
  getshowboxes(event:any){
    return  (event.target.innerWidth <= 468) ? 0 : 1;

  }

  getonResizeCurrentGridwith3(event:any){
  return (event.target.innerWidth <= 514) ? 1 : 3;

  }
  getonResizeCurrentGridwith2(event:any){
    return (event.target.innerWidth <= 832) ? 1 : 2;

    }
  getonResizeCurrentGridwith5(event:any){
    return (event.target.innerWidth <= 600) ? 1 : 5;

    }

    

  constructor() { }
}
