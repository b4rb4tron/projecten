import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  template: `
  <h2> 
  {{ title }} 
</h2>


  <ul>
    <li *ngFor="let list of courses">
 {{ list }}
    </li>
  </ul>

  `
})
export class CoursesComponent implements OnInit {
  title = `List of courses`;
  courses = ["course 1", "course 2", "course 3", "course 4"]

  constructor() { }

  ngOnInit() {
  }

}
