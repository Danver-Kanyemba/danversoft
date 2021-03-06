import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseListService {
  course: any = [
    {
      title: 'DS100 Website Development',
      topic: 'greatest teachers in the world',
      price: 'Hourly: $10.00',
      time: 'Est.Time Less than a month, Less than 30hrs/week',
      discover: [
        'How to create the Website User Interface and style it',
        'How to apply Javascript to a website',
        'how to connect to the database using PHP and perform SQL queries',
      ],
      courses_content: [
        'Lecture 1. Introduction to Website development',
        'Lecture 2. Tools used and shortcuts',
        'Lecture 3. HTML for Beginner',
        'Lecture 4. Cascading Style Sheet (CSS) for Beginner',
        'Lecture 5. Javascript for Beginner',
        'Lecture 6. PHP for Beginner',
      ],
      instructor: ['Danver Kanyemba'],
      instructor_image: [
        'https://material.angular.io/assets/img/examples/shiba1.jpg',
      ],
      skill: ['HTML', 'CSS', 'Javascript', 'PHP', 'SQL'],
    },
    {
      title: 'DS101 Vue Framework',
      topic: 'greatest teachers in the world',
      price: 'Hourly: $10.00',
      time: 'Est.Time Less than a month, Less than 30hrs/week',
      discover: [
        'How to become a Frontend-end Developer',
        'How to create projects and components',
        'How to use Vuetify',
      ],
      courses_content: [
        'Lecture 1. Introduction to Vue.js Framework.',
        'Lecture 2. Installing Vue.js and other requirements.',
        'Lecture 3. Creating project and other selections.',
        'Lecture 4. Components structure',
      ],
      instructor: ['Danver Kanyemba'],
      instructor_image: [
        'https://material.angular.io/assets/img/examples/shiba1.jpg',
      ],
      skill: ['Vue', 'Vue data', 'Vuetify', 'Vue-axios'],
    },
    {
      title: 'DS102 Laravel Framework (Backend)',
      topic: 'greatest teachers in the world',
      price: 'Hourly: $10.00',
      time: 'Est.Time more than a month, Less than 20hrs/week',
      discover: [
        'How to use Laravel generator',
        'How to rapidly develop websites',
        'How to safeguard or protect websites',
        "How to create Application Programming Interfaces API's",
      ],
      courses_content: [
        'Lecture 1. Welcome',
        'Lecture 2. Prerequisites for the course',
        'Lecture 3. Introduction to Laravel',
        'Lecture 4. Installing Laravel',
        'Lecture 5. Setting up Composer on your PC',
        'Lecture 6. Creating Laravel pages',
        'Lecture 7. Working with Blade Templates',
        'Lecture 8. Course specialization (API or Full stack creation)',
        'Lecture 9. A look at how the industry is using Laravel for API',
      ],
      instructor: ['Danver Kanyemba'],
      instructor_image: [
        'https://material.angular.io/assets/img/examples/shiba1.jpg',
      ],
      skill: [
        'Laravel',
        'Blade templating',
        'API',
        'Gates',
        'Laravel Generator',
      ],
    },
    {
      title: 'DS103 Angular Framework (Frontend)',
      topic: 'greatest teachers in the world',
      price: 'Hourly: $15.00',
      time: 'Est.Time Less than a month, Less than 30hrs/week',
      discover: [
        'Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs',
        'Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs',
        'Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs',
      ],
      courses_content: [
        "Lecture 1. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
        "Lecture 2. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
        "Lecture 3. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
      ],
      instructor: ['Danver Kanyemba'],
      instructor_image: [
        'https://material.angular.io/assets/img/examples/shiba1.jpg',
      ],
      skill: ['apple', 'banana', 'strawberry', 'orange', 'kiwi', 'cherry'],
    },
    {
      title: 'DS104 Firebase',
      topic: 'greatest teachers in the world',
      price: 'Hourly: $10.00-$30',
      time: 'Est.Time Less than a month, Less than 30hrs/week',
      discover: [
        'Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs',
        'Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs',
        'Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs',
      ],
      courses_content: [
        "Lecture 1. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
        "Lecture 2. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
        "Lecture 3. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
      ],
      instructor: ['Danver Kanyemba'],
      instructor_image: [
        'https://material.angular.io/assets/img/examples/shiba1.jpg',
      ],
      skill: ['apple', 'banana', 'strawberry', 'orange', 'kiwi', 'cherry'],
    },
    // {
    //   'title':'DS105 Wordpress',
    //   'topic':'greatest teachers in the world',
    //   'price':'Hourly: $10.00-$30',
    //   'time':'Est.Time Less than a month, Less than 30hrs/week',
    //   'discover':[
    //     "Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs",
    //     "Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs",
    //     "Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs"
    //   ],
    //   'courses_content':[
    //     "Lecture 1. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
    //     "Lecture 2. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
    //     "Lecture 3. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
    //   ],
    //   'instructor': [
    //     'Danver Kanyemba'
    //   ],
    //   'instructor_image': [
    //     'https://material.angular.io/assets/img/examples/shiba1.jpg'
    //   ],
    //   'skill': [
    //      'apple',
    //      'banana',
    //      'strawberry',
    //      'orange',
    //      'kiwi',
    //      'cherry'
    //   ]
    // },
    // {
    //   'title':'DS106 Cpanel',
    //   'topic':'greatest teachers in the world',
    //   'price':'Hourly: $10.00-$30',
    //   'time':'Est.Time Less than a month, Less than 30hrs/week',
    //   'discover':[
    //     "Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs",
    //     "Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs",
    //     "Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs"
    //   ],
    //   'courses_content':[
    //     "Lecture 1. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
    //     "Lecture 2. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
    //     "Lecture 3. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
    //   ],
    //   'instructor': [
    //     'Danver Kanyemba'
    //   ],
    //   'instructor_image': [
    //     'https://material.angular.io/assets/img/examples/shiba1.jpg'
    //   ],
    //   'skill': [
    //      'apple',
    //      'banana',
    //      'strawberry',
    //      'orange',
    //      'kiwi',
    //      'cherry'
    //   ]
    // },
    {
      title: 'DS107 Hosting Websites',
      topic: 'greatest teachers in the world',
      price: 'Hourly: $10.00-$30',
      time: 'Est.Time Less than a month, Less than 30hrs/week',
      discover: [
        'Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs',
        'Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs',
        'Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs',
      ],
      courses_content: [
        "Lecture 1. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
        "Lecture 2. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
        "Lecture 3. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
      ],
      instructor: ['Danver Kanyemba'],
      instructor_image: [
        'https://material.angular.io/assets/img/examples/shiba1.jpg',
      ],
      skill: ['apple', 'banana', 'strawberry', 'orange', 'kiwi', 'cherry'],
    },
    {
      title: 'DS108 Hosting websites for free',
      topic: 'greatest teachers in the world',
      price: 'Hourly: $10.00-$30',
      time: 'Est.Time Less than a month, Less than 30hrs/week',
      discover: [
        'Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs',
        'Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs',
        'Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs',
      ],
      courses_content: [
        "Lecture 1. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
        "Lecture 2. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
        "Lecture 3. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
      ],
      instructor: ['Danver Kanyemba'],
      instructor_image: [
        'https://material.angular.io/assets/img/examples/shiba1.jpg',
      ],
      skill: ['apple', 'banana', 'strawberry', 'orange', 'kiwi', 'cherry'],
    },
    {
      title: 'DS109 GitHub and Git',
      topic: 'greatest teachers in the world',
      price: 'Hourly: $10.00-$30',
      time: 'Est.Time Less than a month, Less than 30hrs/week',
      discover: [
        'Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs',
        'Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs',
        'Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs',
      ],
      courses_content: [
        "Lecture 1. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
        "Lecture 2. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
        "Lecture 3. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
      ],
      instructor: ['Danver Kanyemba'],
      instructor_image: [
        'https://material.angular.io/assets/img/examples/shiba1.jpg',
      ],
      skill: ['apple', 'banana', 'strawberry', 'orange', 'kiwi', 'cherry'],
    },
    {
      title: 'how to teach marathon',
      topic: 'greatest teachers in the world',
      price: 'Hourly: $10.00-$30',
      time: 'Est.Time Less than a month, Less than 30hrs/week',
      discover: [
        'Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs',
        'Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs',
        'Follow the design process: empathize with users,define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs',
      ],
      courses_content: [
        "Lecture 1. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
        "Lecture 2. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
        "Lecture 3. Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.",
      ],
      instructor: ['Danver Kanyemba'],
      instructor_image: [
        'https://material.angular.io/assets/img/examples/shiba1.jpg',
      ],
      skill: ['apple', 'banana', 'strawberry', 'orange', 'kiwi', 'cherry'],
    },
  ];
  constructor() {}

  get course_number() {
    return Object.keys(this.course).length;
  }
}
