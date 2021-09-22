import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentsComponent } from './students/students.component';
import { UpdateStudentComponent } from './update-student/update-student.component';


const routes: Routes = [
  {path:'students', component:StudentsComponent},
  {path:'create', component:CreateStudentComponent},
  {path:'', redirectTo:'students', pathMatch:'full'}, 
  {path:'update-student/:id', component:UpdateStudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
  

  
}
