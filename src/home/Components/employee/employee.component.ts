import { decimalDigest } from '@angular/compiler/src/i18n/digest';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/core/models/Employee';
import { EmployeeServiceService } from './employeeService.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private _employeeService: EmployeeServiceService, private route: ActivatedRoute, private router: Router ) { }
  id: number;
  action: number;
  isDisabled: boolean = false;

  employeeForm = new FormGroup({
    id: new FormControl({ value: '', disabled: this.isDisabled }, Validators.required),
    firstName: new FormControl({ value: '', disabled: this.isDisabled }, Validators.required),
    lastName: new FormControl({ value: '', disabled: this.isDisabled }, Validators.required),
    age: new FormControl({ value: '', disabled: this.isDisabled }, Validators.required),
    experience: new FormControl({ value: '', disabled: this.isDisabled }, Validators.required),
  });

  ngOnInit() {
    this.route.params.subscribe( params => {
      debugger;
      this.id = params?.id;
      this.action = params.action;
      if( this.id && this.action !== 1)
        this.isDisabled = true;
    });
    if(this.id){
      this.getEmployeeData()
    }
    
  }

  getEmployeeData(){
    this._employeeService.getEmployeeData(this.id).subscribe((response:Employee) => {
      this.employeeForm.setValue(response)
    })
  }

  submitEmployeeForm(){
    if(this.id){
      debugger
      this._employeeService.updateEmployee(this.employeeForm.value).subscribe((response) => {
        this.router.navigate(['']);
      });
    }else{
      this._employeeService.createEmployee(this.employeeForm.value).subscribe((response) => {
        this.router.navigate(['']);
      });
    }

  }
}
