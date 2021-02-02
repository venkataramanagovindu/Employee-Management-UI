import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/core/models/Employee';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }
  employees: Array<Employee>;
  displayedColumns: string[] = ['id', 'FirstName', 'LastName', 'Age', 'Experience', 'Visibility'];

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(){
    this.homeService.getEmployees().subscribe((response: Array<Employee>) => {
      this.employees = response;
    })
  }

  editEmployee(){

  }

  deleteEmployee(id: number){
    this.homeService.deleteEmployee(id).subscribe( response => {
      this.getEmployees();
    });
  }

  // viewEmployee(){

  // }
}
