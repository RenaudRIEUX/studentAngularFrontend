import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl:string = "http://localhost:8080/"

  constructor(private httpClient:HttpClient) {

  }
  
  getStudents():Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseUrl}/students`);
  }

  saveStudent(student : Student) : Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/addStudent`, student);
    
  }

  deleteStudent(studentId:number):Observable<Object>{
    console.log(`${this.baseUrl}delete/${studentId}`);
    
    return this.httpClient.delete(`${this.baseUrl}delete/${studentId}`);
  }
  

}
