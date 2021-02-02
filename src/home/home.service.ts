import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIRouts } from 'src/core/APIRouts';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

constructor(private _http: HttpClient) { }

getEmployees(){
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  let options = {
    headers: headers
  }

  return this._http.get(APIRouts.getEmployees, options);
}

deleteEmployee(id: number){
  return this._http.delete(APIRouts.deleteEmployee + "/" + id);
}
}
