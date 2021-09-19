import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { UpdateStudentComponent } from './update-student/update-student.component';


const routes: Routes = [
  {path:'students', component:StudentsComponent},
  {path:'update', component:UpdateStudentComponent},
  {path:'', redirectTo:'students', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
  

  
}
