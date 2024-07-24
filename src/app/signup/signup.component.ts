import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { ButtonDirective } from '../button.directive';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule, Validators} from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterModule, ButtonDirective, ReactiveFormsModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  buttonText:string="Create"
  userService:UserService = inject(UserService);
  user:User = new User();
  constructor(private router:Router){}
  userForm = new FormGroup({
    id:new FormControl(0),
    username:new FormControl('',Validators.compose([Validators.required, Validators.maxLength(20)])),
    email:new FormControl('',Validators.compose([Validators.required,Validators.email])),
    password:new FormControl('',Validators.required),
    phone:new FormControl('', Validators.compose([Validators.required,Validators.maxLength(10)])),
    role:new FormControl('USER')
  })
  onCrossClick(){
    this.router.navigate(['/homePage']);
  }
  onCreateClick(){
    this.createUser(this.userForm);
  }
  createUser(userForm:FormGroup){
    this.user = userForm.value;
    if(userForm.valid){
      this.userService.saveTodo(this.user).subscribe(data=>{
        console.log(data);
      });
      this.router.navigate(['/login'])
    }

  }

}
