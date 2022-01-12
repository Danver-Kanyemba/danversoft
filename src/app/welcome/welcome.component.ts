import { Component } from '@angular/core';
import { BreakpointfordevicesService } from '../service/breakpointfordevices.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent  {
  breakpoint: any;

  constructor(private breakpointService: BreakpointfordevicesService) {
    this.breakpoint = this.breakpointService.onInCurrentGridwith2;
  }

  
  onResize(event: any) {
    this.breakpoint = this.breakpointService.getonResizeCurrentGridwith2(event);
  }
}
