import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CodeInputModule } from 'angular-code-input';
import { UserService } from '../user.service';
@Component({
  selector: 'app-activate-account',
  standalone: true,
  imports: [CodeInputModule],
  templateUrl: './activate-account.component.html',
  styleUrl: './activate-account.component.css'
})
export class ActivateAccountComponent {
  userService:UserService=inject(UserService);
  message:string='';
  isOkay:boolean=true;
  isSubmitted:boolean=false;
  token:string='';
  constructor(private router:Router){

  }
  onCodeCompleted(token:string){
    this.token = token;
  }

  onSubmit(){
    this.confirmAccount(this.token)
  }
  confirmAccount(token: string) {
    this.userService.activateUserAccount(token).subscribe({
      next:(response:any)=>{
        this.message = "Your account has been registered and activated successfully";
        this.isSubmitted = true;
      },
      error:(response:any)=>{
        this.message = response.error['message'];
        this.isSubmitted = true;
        this.isOkay= false;
      }
    })
  }
  onLogin(){
    this.router.navigate(['/login'])
  }
  onTryAgain(){
    this.router.navigate(['/activate-account'])
    this.isSubmitted=false;
    this.isOkay=true;
  }
}
