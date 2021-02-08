import { decimalDigest } from '@angular/compiler/src/i18n/digest';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/core/models/Employee';
import { Mail } from 'src/core/models/Mail';
import { EmployeeServiceService } from './employeeService.service';

let inputHtml;
  function initEditor() {
    debugger
    ClassicEditor
    .create( document.querySelector( '#editor' ) )
    .then( editor => {
            inputHtml = editor
            console.log( editor );
    } )
    .catch( error => {
            console.error( error );
    } );
  }
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, AfterViewInit {

  constructor(private _employeeService: EmployeeServiceService, private route: ActivatedRoute, private router: Router ) { }

  id: number;
  action: number;
  isDisabled: boolean = false;
  mail: Mail;

  employeeForm = new FormGroup({
    from: new FormControl({ value: '', disabled: this.isDisabled }, Validators.required),
    to: new FormControl({ value: '', disabled: this.isDisabled }, Validators.required),
    subject: new FormControl({ value: '', disabled: this.isDisabled }, Validators.required),
    // body: new FormControl({ value: '', disabled: this.isDisabled }, Validators.required),
    // experience: new FormControl({ value: '', disabled: this.isDisabled }, Validators.required),
  });

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.id = params?.id;
      this.action = params.action;
      if( this.id && this.action !== 1)
        this.isDisabled = true;
    });
    if(this.id){
      this.getEmployeeData()
    }    
  }

  ngAfterViewInit(): void {
    initEditor();
  }

  getEmployeeData(){
    this._employeeService.getEmployeeData(this.id).subscribe((response:Employee) => {
      this.employeeForm.setValue(response)
    })
  }

  sendMail(){
    var x = inputHtml.getData();
    this.mail = this.employeeForm.value;
    this.mail.body = inputHtml.getData();
    this._employeeService.sendMail(this.mail).subscribe((response) => {
      this.router.navigate(['']);
    });
  }

  submitEmployeeForm(){
    var x = inputHtml.getData()
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
