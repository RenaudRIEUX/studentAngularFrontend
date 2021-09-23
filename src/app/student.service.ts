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

  getStudentById(studentId:number):  Observable<Student>{
    return this.httpClient.get<Student>(`${this.baseUrl}/findStudent/${studentId}`)
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
  
  updateStudent(studentId:number, student:Student):Observable<Object>{
    console.log(`${this.baseUrl}modify/${studentId}`);
    console.log(student);
    
    
    return this.httpClient.put(`${this.baseUrl}modify/${studentId}`,student)
    
  }

}
