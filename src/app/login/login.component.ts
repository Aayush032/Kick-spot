import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { ButtonDirective } from '../button.directive';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,ButtonDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isPassword:boolean=true;
  password:string="password";
  buttonText:string="Log In";
  constructor(private router:Router){
  
  }
  onCrossClick(){
    this.router.navigate(['/homePage'])
  }
  onShowPassword(){
    this.isPassword = !this.isPassword;
    if(this.isPassword){
      this.password = "password";
    }else{
      this.password="text";
    }
    console.log(this.isPassword)
    console.log(this.password);
  }
}
