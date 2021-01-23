import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from 'src/home/Components/employee/employee.component';
import { HomeComponent } from 'src/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "employee",
    component: EmployeeComponent
  },
  {
    path: "employee/:id",
    component: EmployeeComponent
  },
  {
    path: "employee/:id/:action",
    component: EmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
