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
} from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';
import { NgClass } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    RouterModule,
    ButtonDirective,
    ReactiveFormsModule,
    FormsModule,
    NgClass,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  buttonText: string = 'Create';
  userService: UserService = inject(UserService);
  user: User = new User();
  constructor(private router: Router, private toast: ToastrService) {}
  userForm = new FormGroup({
    id: new FormControl(0),
    username: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.maxLength(20)])
    ),
    email: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    password: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(8)])
    ),
    phone: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        this.numericValidator,
      ])
    ),
    role: new FormControl('USER'),
  });
  onCrossClick() {
    this.router.navigate(['/homePage']);
  }
  onCreateClick() {
    this.createUser(this.userForm);
  }
  createUser(userForm: FormGroup) {
    this.user = userForm.value;
    if (userForm.invalid) {
      this.toast.error('Please enter valid credentials', 'Invalid');
    }
    if (userForm.valid) {
      this.userService.saveTodo(this.user).subscribe((data) => {
        console.log(data);
        this.toast.success('Account registered successfully', 'Welcome');
      });
      // Delay navigation to allow the toast to be visible
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000);
    }
  }
  numericValidator(control: AbstractControl): ValidationErrors | null {
    const valid = /^[0-9]*$/.test(control.value);
    return valid ? null : { numeric: true };
  }
}
