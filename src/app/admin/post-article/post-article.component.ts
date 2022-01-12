import { Component, OnInit } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-article',
  templateUrl: './post-article.component.html',
  styleUrls: ['./post-article.component.css'],
})
export class PostArticleComponent implements OnInit {
  form: any;
  course$: AngularFireList<any[]> | undefined;
  breakpoint: any;

  constructor(private fb: FormBuilder, private db: AngularFireDatabase) {}

  ngOnInit(): void {
    this.course$ = this.db.list('/pricing');

    this.form = this.fb.group({
      topic: ['', [Validators.required, Validators.maxLength(10)]],
      picture_link: ['', [Validators.required, Validators.maxLength(10)]],
      detail: ['', [Validators.required, Validators.maxLength(10)]],
      amount: ['', Validators.required],
      color: ['', Validators.required],
      additional_info: [''],
      upload_date: ['', Validators.required],
    });
  }

  get topic() {
    return this.form.get('topic');
  }

  get detail() {
    return this.form.get('detail');
  }

  get amount() {
    return this.form.get('amount');
  }
  get color() {
    return this.form.get('color');
  }
  get additional_info() {
    return this.form.get('additional_info');
  }

  submitPrices() {
    this.course$?.push(this.form.value);

    console.log(this.form.value);
  }
}
