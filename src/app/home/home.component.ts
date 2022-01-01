import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BreakpointfordevicesService } from '../service/breakpointfordevices.service';
import { MusicService } from "../service/music.service";

import { DialogCoursesComponent } from '../dialog-courses/dialog-courses.component';
import { CourseListService } from '../service/course-list.service';

export interface Vegetable {
  name: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  // allMusic$ = this.ms.allMusic$;
  breakpoint:any;

  vegetables: Vegetable[] = [
    {name: 'apple'},
    {name: 'banana'},
    {name: 'strawberry'},
    {name: 'orange'},
    {name: 'kiwi'},
    {name: 'cherry'},
  ];

  blosg: any = [
    {'title':'DS100 Website Development', 'topic':'greatest teachers in the world', 'price':'Hourly: $10.00-$30', 'time':'Est.Time Less than a month, Less than 30hrs/week'},
    {'title':'DS101 Vue Framework', 'topic':'greatest teachers in the world','price':'Hourly: $10.00-$30', 'time':'Est.Time Less than a month, Less than 30hrs/week'},
    {'title':'DS102 Laravel Framework (Backend)', 'topic':'greatest teachers in the world','price':'Hourly: $10.00-$30', 'time':'Est.Time Less than a month, Less than 30hrs/week'},
    {'title':'DS103 Angular Framework (Frontend)', 'topic':'greatest teachers in the world','price':'Hourly: $10.00-$30', 'time':'Est.Time Less than a month, Less than 30hrs/week'},
    {'title':'DS104 Firebase', 'topic':'greatest teachers in the world','price':'Hourly: $10.00-$30', 'time':'Est.Time Less than a month, Less than 30hrs/week'},
    {'title':'DS105 Wordpress', 'topic':'greatest teachers in the world','price':'Hourly: $10.00-$30', 'time':'Est.Time Less than a month, Less than 30hrs/week'},
    {'title':'DS106 Cpanel', 'topic':'greatest teachers in the world','price':'Hourly: $10.00-$30', 'time':'Est.Time Less than a month, Less than 30hrs/week'},
    {'title':'DS107 Hosting Websites', 'topic':'greatest teachers in the world','price':'Hourly: $10.00-$30', 'time':'Est.Time Less than a month, Less than 30hrs/week'},
    {'title':'DS108 Hosting websites for free', 'topic':'greatest teachers in the world','price':'Hourly: $10.00-$30', 'time':'Est.Time Less than a month, Less than 30hrs/week'},
    {'title':'DS109 GitHub and Git', 'topic':'greatest teachers in the world','price':'Hourly: $10.00-$30', 'time':'Est.Time Less than a month, Less than 30hrs/week'},
    {'title':'how to teach marathon', 'topic':'greatest teachers in the world','price':'Hourly: $10.00-$30', 'time':'Est.Time Less than a month, Less than 30hrs/week'},
  ]
  course_list_from_db: any =[];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.course_list_from_db = this.coursesfordanver.course;
  }
  constructor(
    // private ms: MusicService, 
    private coursesfordanver:CourseListService,
    private breakpointService:BreakpointfordevicesService, 
    private dialog: MatDialog
    ) {
    this.breakpoint = this.breakpointService.onInCurrentGridwith2;
  }

  onResize(event:any) {
    this.breakpoint = this.breakpointService.getonResizeCurrentGridwith2(event);
  }

  openDialog(course_index: number) {
    
    const dialogRef = this.dialog.open(DialogCoursesComponent,{
      height: '100%',
      width: '100%',
      data:{current_index: course_index}
    });

    dialogRef.afterClosed().subscribe(result=> {
      console.log(`Dialog result: ${result}`);
    });
  }

}

