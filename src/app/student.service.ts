import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl:string = "http://localhost:8080/"
  private baseUrl2:string = "http://localhost:8080/students";

  constructor(private httpClient:HttpClient) {

  }
  
  getStudents():Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseUrl2}`);
  }

}
