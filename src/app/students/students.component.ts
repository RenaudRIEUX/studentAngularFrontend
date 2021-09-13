import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students:Student[] = [];

  constructor() { }

  ngOnInit(): void {
    this.students=[new Student("renaud")];
  }

}
