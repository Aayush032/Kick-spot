import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { ButtonDirective } from '../button.directive';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  FormsModule,
  Validators,
  AbstractControl,
  ValidationErrors,
  FormBuilder
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginDetails } from '../login-details';
import { NgClass } from '@angular/common';
import { TokenService } from '../token.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterModule,
    ButtonDirective,
    ReactiveFormsModule,
    FormsModule,
    NgClass,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username:string='';
  isPassword: boolean = true;
  password: string = 'password';
  buttonText: string = 'Log In';
  loginDetails: LoginDetails = new LoginDetails();
  tokenService: TokenService = inject(TokenService);
  userService: UserService = inject(UserService);
  loginForm:FormGroup;
  constructor(private router: Router, private toast: ToastrService, private fb:FormBuilder) {
    this.loginForm = fb.group({
      email:['',[
        Validators.required,
        Validators.email,
        this.emailValidator,
      ]],
      password:['',[Validators.required]]
    })
  }

  onCrossClick() {
    this.router.navigate(['/homePage']);
  }
  onShowPassword() {
    this.isPassword = !this.isPassword;
    if (this.isPassword) {
      this.password = 'password';
    } else {
      this.password = 'text';
    }
  }
  emailValidator(control: AbstractControl): ValidationErrors | null {
    const valid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
      control.value
    );
    return valid ? null : { invalid_email: true };
  }
  onLogin() {
    this.authenticateUser(this.loginForm);
  }
  authenticateUser(loginDetails: FormGroup) {
    this.loginDetails = loginDetails.value;
    if (this.loginForm.valid) {
      this.userService.loginUser(this.loginDetails).subscribe({
        next: (response: any) => {
          this.userService.getUserDetails(this.loginDetails.email).subscribe((res:any)=>{
            this.tokenService.setToken(response.data, res.data['username'],res.data['id']);
            this.username= res.data['username'];
            console.log(res)
          });
          this.toast.success('Login successfully', 'Welcome');
          // Delay navigation to allow the toast to be visible
          setTimeout(() => {
            this.router.navigate(['/homePage']);
          }, 2000);
        },
        error: (error) => {
          this.toast.error('Bad Credentials', 'Invalid');
          this.loginForm.reset();
            this.loginForm.setErrors({ invalidCredentials: true });          
        },
      });
    }
  }
}

// console.log(response);
// this.tokenService.token = response.data;
// this.toast.success('Login successfully', 'Welcome');
