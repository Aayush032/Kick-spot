import { Component } from '@angular/core';
import { LandingComponent } from '../landing/landing.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LandingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router:Router){}
    onLoginClick(){
      this.router.navigate(['/login'])
    }
}
