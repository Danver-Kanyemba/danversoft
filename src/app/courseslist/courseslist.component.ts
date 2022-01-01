import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BreakpointfordevicesService } from '../service/breakpointfordevices.service';
import { SelectedCoursesService } from '../service/selected-courses.service';

@Component({
  selector: 'app-courseslist',
  templateUrl: './courseslist.component.html',
  styleUrls: ['./courseslist.component.css']
})
export class CourseslistComponent implements OnInit {

  breakpoint:any;
  isLinear = false;
  firstFormGroup: any ;
  secondFormGroup: any ;
  selected_courses: any=[];

  constructor(
     private breakpointService:BreakpointfordevicesService,
     private _formBuilder: FormBuilder,
     private selected_courses_service:SelectedCoursesService,
     private selct_cs_service: SelectedCoursesService
     ) {
    this.breakpoint = this.breakpointService.onInCurrentGridwith2;
  }

  ngOnInit() {

    this.selected_courses = this.selected_courses_service.select_these_ones;

    this.firstFormGroup = this._formBuilder.group({
      // firstCtrl: [this.selct_cs_service.select_these_ones, Validators.required],
      selectedCourseFrm: [[this.selected_courses], Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    // this.firstFormGroup.controls('selectedCourseFrm').setValue(this.selct_cs_service.select_these_ones)
  }


  remove_from_list(course_select:any){
    this.selct_cs_service.delete(course_select)
  }

  
  onResize(event:any) {
    this.breakpoint = this.breakpointService.getonResizeCurrentGridwith2(event);
  }

}
