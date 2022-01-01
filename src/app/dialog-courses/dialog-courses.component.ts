import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourseListService } from '../service/course-list.service';
import { SelectedCoursesService } from '../service/selected-courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface Vegetable {
  name: string;
}

@Component({
  selector: 'app-dialog-courses',
  templateUrl: './dialog-courses.component.html',
  styleUrls: ['./dialog-courses.component.css']
})
export class DialogCoursesComponent  {
  courses_list:any=[];
  index_num:any=-1;
  constructor(
      private courseService:CourseListService,
      private select_CS_Service: SelectedCoursesService,
      private _snackBar: MatSnackBar,
      @Inject(MAT_DIALOG_DATA) private data: {current_index: string},
      ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.   index_num.current_index
    this.courses_list = this.courseService.course;
    this.index_num = this.data.current_index;

  }

  addCourse(courseTitle:HTMLElement){
    console.log(courseTitle);
    
    this.select_CS_Service.add(courseTitle.innerText);
    this._snackBar.open(
      courseTitle.innerText +`  added successfully`,'Ok', {duration: 3000}
      );
      // this.close();
  }

}
