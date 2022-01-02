import { Component, OnInit } from '@angular/core';
import { BreakpointfordevicesService } from '../service/breakpointfordevices.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  breakpoint:any;

  constructor(
      private breakpointService:BreakpointfordevicesService, 
    ) {

      this.breakpoint = this.breakpointService.onInCurrentGridwith2;
     }

  ngOnInit(): void {
  }
  onResize(event:any) {
    this.breakpoint = this.breakpointService.getonResizeCurrentGridwith2(event);
  }

}
