import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BreakpointfordevicesService } from '../service/breakpointfordevices.service';
import { fade, slide } from '../animations';
import { DialogCoursesComponent } from '../dialog-courses/dialog-courses.component';
import { CourseListService } from '../service/course-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fade, slide],
})
export class HomeComponent implements OnInit {
  // allMusic$ = this.ms.allMusic$;
  breakpoint: any;
  testnum: any = 3;
  course_list_from_db: any = [];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.course_list_from_db = this.coursesfordanver.course;
  }
  constructor(
    // private ms: MusicService,
    private coursesfordanver: CourseListService,
    private breakpointService: BreakpointfordevicesService,
    private dialog: MatDialog
  ) {
    this.breakpoint = this.breakpointService.onInCurrentGridwith2;
  }

  onResize(event: any) {
    this.breakpoint = this.breakpointService.getonResizeCurrentGridwith2(event);
  }

  openDialog(course_index: number) {
    const dialogRef = this.dialog.open(DialogCoursesComponent, {
      height: '100%',
      width: '100%',
      data: { current_index: course_index },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  showMore() {
    this.testnum += 3;
    console.log(this.testnum);
  }
}
