import { Component, inject, OnInit } from '@angular/core';
import { LandingComponent } from '../landing/landing.component';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LandingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isLoggedIn:boolean;
  userService:UserService = inject(UserService);
  tokenService:TokenService = inject(TokenService);
  username:string;
  constructor(private router:Router){
    console.log(this.tokenService.isAuthenticated());
    this.isLoggedIn = this.tokenService.isAuthenticated();
    console.log(this.isLoggedIn);    
    this.username = localStorage.getItem("name") ?? "User";
  }
  
    onLoginClick(){
      this.router.navigate(['/login'])
    }
    onLogOut(){
      this.tokenService.logOut();
    }
}
