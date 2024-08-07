import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TournamentComponent } from './tournament/tournament.component';
import { ExtraOptions } from '@angular/router';
import { GroundComponent } from './ground/ground.component';
import { GroundDetailsComponent } from './ground-details/ground-details.component';
import { TournamentDetailsComponent } from './tournament-details/tournament-details.component';
import { AccountComponent } from './account/account.component';
import { ActivateAccountComponent } from './activate-account/activate-account.component';
import { AboutUsComponent } from './about-us/about-us.component';

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
    },
    {
        path:"futsal/:id",
        component:GroundDetailsComponent,
        title: 'Details Page'
    },
    {
        path:"tournament/:id",
        component:TournamentDetailsComponent,
        title:"Details Page"
    },
    {
        path:"accounts",
        component:AccountComponent,
        title:"Account Page"
    },
    {
        path:"activate-account",
        component:ActivateAccountComponent,
        title:"Account Activation"
    },
    {
        path:"about-us",
        component:AboutUsComponent,
        title:"About Us"
    }
];
