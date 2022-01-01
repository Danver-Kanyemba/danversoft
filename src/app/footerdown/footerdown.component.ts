import { Component, OnInit } from '@angular/core';
import { BreakpointfordevicesService } from '../service/breakpointfordevices.service';
import { VariablenamesService } from '../service/variablenames.service';

@Component({
  selector: 'app-footerdown',
  templateUrl: './footerdown.component.html',
  styleUrls: ['./footerdown.component.css']
})

export class FooterdownComponent implements OnInit  {
  breakpoint:any;
  websiteName:string = this.variableSer.websiteName;

  constructor(private test1: BreakpointfordevicesService, private variableSer:VariablenamesService) {
  }

  ngOnInit() {
    // this.breakpoint = (window.innerWidth <= 514) ? 1 : 3;
    this.breakpoint = this.test1.onInCurrentGridwith2;
}
 
onResize(event:any) {
  // this.breakpoint = (event.target.innerWidth <= 514) ? 1 : 3;
  this.breakpoint = this.test1.getonResizeCurrentGridwith2(event);
}

}
