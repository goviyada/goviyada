import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http:HttpClient) { }
 
  public loginUserFromRemote(user: User):Observable<any>
  {
   return this._http.post<any>("https://localhost:9001/v1/login",user);
  }
}
