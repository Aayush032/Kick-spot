import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url="http://localhost:8080";

  constructor(private http:HttpClient) { }
  
  // Service to Register User
  saveTodo(user:User):Observable<object>{
    console.log(user);
    return this.http.post(`${this.url}/registerUser`,user);
  }
}
