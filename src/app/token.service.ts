import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class TokenService {
  setToken(token:string, username:string){
    localStorage.setItem('token',token);
    localStorage.setItem('name',username);
  }
  getToken(){
    return localStorage.getItem('token');
  
  }
  isAuthenticated():boolean{
    if(this.getToken()==undefined||this.getToken()==null||this.getToken()==''){
      return false;
    }
    else{
      return true;
    }
  }
  logOut(){
    localStorage.removeItem("token");
    localStorage.removeItem("name");
  }
}
