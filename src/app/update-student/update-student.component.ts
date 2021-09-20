import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  student : Student = new Student();

  constructor(private studentService : StudentService) { }

  ngOnInit(): void {
    
    
    
  }
  
  saveStudent(){
    this.studentService.saveStudent(this.student).subscribe( data =>{
      console.log(data);
    },
    error => console.log(error));
  }
    
  onSubmit(){
    console.log(this.student);
    this.saveStudent()
  }

}
