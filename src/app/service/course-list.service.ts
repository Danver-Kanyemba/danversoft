import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseListService {
  course: any = [
    {
      'title':'DS100 Website Development',
      'topic':'greatest teachers in the world',
      'price':'Hourly: $10.00-$30', 
      'time':'Est.Time Less than a month, Less than 30hrs/week',
      'discover':[
        "Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs",
        "Fdollow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs",
        "Follodw the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs"
      ],
      'courses_content':[
        "Lecture 1. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
        "Lecture 2. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
        "Lecture 3. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
      ],
      'instructor': [
        'Danver Kanyemba'
      ],
      'instructor_image': [
        'https://material.angular.io/assets/img/examples/shiba1.jpg'],
        'skill': [   
         'HTML',
         'CSS',
         'Javascript',
         'PHP',
         'SQL'
      ],
    },
    {
      'title':'DS101 Vue Framework',
      'topic':'greatest teachers in the world',
      'price':'Hourly: $10.00-$30', 
      'time':'Est.Time Less than a month, Less than 30hrs/week',
      'discover':[
        "Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs",
        "Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs",
        "Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs"
      ],
      'courses_content':[
        "Lecture 1. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
        "Lecture 2. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
        "Lecture 3. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
      ],
      'instructor': [
        'Danver Kanyemba'
      ],
      'instructor_image': [
        'https://material.angular.io/assets/img/examples/shiba1.jpg'
      ],
      'skill': [   
         'apple',
         'banana',
         'strawberry',
         'orange',
         'kiwi',
         'cherry'
      ]
    },
    {
      'title':'DS102 Laravel Framework (Backend)',
      'topic':'greatest teachers in the world',
      'price':'Hourly: $10.00-$30', 
      'time':'Est.Time Less than a month, Less than 30hrs/week',
      'discover':[
        "Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs",
        "Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs",
        "Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs"
      ],
      'courses_content':[
        "Lecture 1. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
        "Lecture 2. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
        "Lecture 3. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
      ],
      'instructor': [
        'Danver Kanyemba'
      ],
      'instructor_image': [
        'https://material.angular.io/assets/img/examples/shiba1.jpg'
      ],
      'skill': [   
         'apple',
         'banana',
         'strawberry',
         'orange',
         'kiwi',
         'cherry'
      ]
    },
    {
      'title':'DS103 Angular Framework (Frontend)',
      'topic':'greatest teachers in the world',
      'price':'Hourly: $10.00-$30', 
      'time':'Est.Time Less than a month, Less than 30hrs/week',
      'discover':[
        "Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs",
        "Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs",
        "Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs"
      ],
      'courses_content':[
        "Lecture 1. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
        "Lecture 2. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
        "Lecture 3. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
      ],
      'instructor': [
        'Danver Kanyemba'
      ],
      'instructor_image': [
        'https://material.angular.io/assets/img/examples/shiba1.jpg'
      ],
      'skill': [   
         'apple',
         'banana',
         'strawberry',
         'orange',
         'kiwi',
         'cherry'
      ]
    },
    {
      'title':'DS104 Firebase',
      'topic':'greatest teachers in the world',
      'price':'Hourly: $10.00-$30', 
      'time':'Est.Time Less than a month, Less than 30hrs/week',
      'discover':[
        "Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs",
        "Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs",
        "Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs"
      ],
      'courses_content':[
        "Lecture 1. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
        "Lecture 2. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
        "Lecture 3. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
      ],
      'instructor': [
        'Danver Kanyemba'
      ],
      'instructor_image': [
        'https://material.angular.io/assets/img/examples/shiba1.jpg'
      ],
      'skill': [   
         'apple',
         'banana',
         'strawberry',
         'orange',
         'kiwi',
         'cherry'
      ]
    },
    {
      'title':'DS105 Wordpress',
      'topic':'greatest teachers in the world',
      'price':'Hourly: $10.00-$30', 
      'time':'Est.Time Less than a month, Less than 30hrs/week',
      'discover':[
        "Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs",
        "Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs",
        "Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs"
      ],
      'courses_content':[
        "Lecture 1. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
        "Lecture 2. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
        "Lecture 3. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
      ],
      'instructor': [
        'Danver Kanyemba'
      ],
      'instructor_image': [
        'https://material.angular.io/assets/img/examples/shiba1.jpg'
      ],
      'skill': [   
         'apple',
         'banana',
         'strawberry',
         'orange',
         'kiwi',
         'cherry'
      ]
    },
    {
      'title':'DS106 Cpanel',
      'topic':'greatest teachers in the world',
      'price':'Hourly: $10.00-$30', 
      'time':'Est.Time Less than a month, Less than 30hrs/week',
      'discover':[
        "Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs",
        "Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs",
        "Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs"
      ],
      'courses_content':[
        "Lecture 1. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
        "Lecture 2. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
        "Lecture 3. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
      ],
      'instructor': [
        'Danver Kanyemba'
      ],
      'instructor_image': [
        'https://material.angular.io/assets/img/examples/shiba1.jpg'
      ],
      'skill': [   
         'apple',
         'banana',
         'strawberry',
         'orange',
         'kiwi',
         'cherry'
      ]
    },
    {
      'title':'DS107 Hosting Websites',
      'topic':'greatest teachers in the world',
      'price':'Hourly: $10.00-$30', 
      'time':'Est.Time Less than a month, Less than 30hrs/week',
      'discover':[
        "Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs",
        "Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs",
        "Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs"
      ],
      'courses_content':[
        "Lecture 1. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
        "Lecture 2. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
        "Lecture 3. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
      ],
      'instructor': [
        'Danver Kanyemba'
      ],
      'instructor_image': [
        'https://material.angular.io/assets/img/examples/shiba1.jpg'
      ],
      'skill': [   
         'apple',
         'banana',
         'strawberry',
         'orange',
         'kiwi',
         'cherry'
      ]
    },
    {
      'title':'DS108 Hosting websites for free',
      'topic':'greatest teachers in the world',
      'price':'Hourly: $10.00-$30', 
      'time':'Est.Time Less than a month, Less than 30hrs/week',
      'discover':[
        "Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs",
        "Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs",
        "Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs"
      ],
      'courses_content':[
        "Lecture 1. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
        "Lecture 2. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
        "Lecture 3. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
      ],
      'instructor': [
        'Danver Kanyemba'
      ],
      'instructor_image': [
        'https://material.angular.io/assets/img/examples/shiba1.jpg'
      ],
      'skill': [   
         'apple',
         'banana',
         'strawberry',
         'orange',
         'kiwi',
         'cherry'
      ]
    },
    {
      'title':'DS109 GitHub and Git',
      'topic':'greatest teachers in the world',
      'price':'Hourly: $10.00-$30', 
      'time':'Est.Time Less than a month, Less than 30hrs/week',
      'discover':[
        "Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs",
        "Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs",
        "Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs"
      ],
      'courses_content':[
        "Lecture 1. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
        "Lecture 2. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
        "Lecture 3. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
      ],
      'instructor': [
        'Danver Kanyemba'
      ],
      'instructor_image': [
        'https://material.angular.io/assets/img/examples/shiba1.jpg'
      ],
      'skill': [   
         'apple',
         'banana',
         'strawberry',
         'orange',
         'kiwi',
         'cherry'
      ]
    },
    {
      'title':'how to teach marathon',
      'topic':'greatest teachers in the world',
      'price':'Hourly: $10.00-$30', 
      'time':'Est.Time Less than a month, Less than 30hrs/week',
      'discover':[
        "Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs",
        "Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs",
        "Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs"
      ],
      'courses_content':[
        "Lecture 1. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
        "Lecture 2. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
        "Lecture 3. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
      ],
      'instructor': [
        'Danver Kanyemba'
      ],
      'instructor_image': [
        'https://material.angular.io/assets/img/examples/shiba1.jpg'
      ],
      'skill': [   
         'apple',
         'banana',
         'strawberry',
         'orange',
         'kiwi',
         'cherry'
      ]
    },
  ]
  constructor() { }
}