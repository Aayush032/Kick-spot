import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { ButtonDirective } from '../button.directive';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule} from '@angular/forms';
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
    username:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    phone:new FormControl(''),
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
    this.userService.saveTodo(this.user).subscribe(data=>{
      console.log(data);
    });
    this.router.navigate(['/login'])
  }

}
