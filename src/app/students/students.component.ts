import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  
  

  students:Student[];

  constructor(private studentService : StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(data=>{
      this.students = data;
    })
  }

  deleteStudent(studentId:number):void{
    console.log(studentId);
    
    this.studentService.deleteStudent(studentId).subscribe(data=>{
      console.log(data);
      
    }
    )
  }

}
