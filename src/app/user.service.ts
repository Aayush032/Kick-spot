import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { LoginDetails } from './login-details';
import { TokenService } from './token.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url="http://localhost:8080";
  tokenService:TokenService=inject(TokenService);

  constructor(private http:HttpClient) { }

  //get user details from the db
  getUserDetails(email:string):Observable<object>{
    return this.http.get(`${this.url}/getUser/${email}`)
  }
  
  // Service to Register User
  registerUser(user:User):Observable<object>{
    console.log(user);
    return this.http.post(`${this.url}/registerUser`,user);
  }

  //Service to login
  loginUser(loginDetails:LoginDetails){
    console.log(loginDetails);
    return this.http.post(`${this.url}/authenticate`,loginDetails);
  }
  
}
