import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIRouts } from 'src/core/APIRouts';
import { Employee } from 'src/core/models/Employee';
import { Mail } from 'src/core/models/Mail';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

constructor(private _http: HttpClient) { }

createEmployee(employee: Employee){
  return this._http.post(APIRouts.createEmployee, employee);
}

getEmployeeData(id: number){
  return this._http.get(APIRouts.getEmployee + "/" + id );
}

updateEmployee(employee: Employee){
  return this._http.put(APIRouts.updateEmployee, employee)
}

sendMail(mail: Mail){
  return this._http.post(APIRouts.sendMail, mail)
}
}
