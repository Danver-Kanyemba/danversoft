import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SelectedCoursesService {
  select_these_ones: any = ['ff'];

  constructor() {}

  delete(course_select: any) {
    let index = this.select_these_ones.indexOf(course_select);
    this.select_these_ones.splice(index);
  }
  add(course_add: any) {
    this.select_these_ones.push(course_add);
    console.log(this.select_these_ones);
    
  }

  get course_selected_num() {
    // return this.select_these_ones.length;
    return Object.keys(this.select_these_ones).length;
  }
}
