import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:"homePage",
        pathMatch:'full',
        title:'Home Page'
    },
    {
        path:'homePage',
        component:HomeComponent,
        title:'Home Page'
    },
    {
        path:'login',
        component:LoginComponent,
        title:'Login Page'
    },
    {
        path:"signup",
        component:SignupComponent,
        title:'SignUp Page'
    }
];
