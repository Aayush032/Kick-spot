import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookingListComponent } from "../booking-list/booking-list.component";

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [BookingListComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  username:string|null;
  constructor(private router:Router){
    this.username = localStorage.getItem("name");
  }
  onCrossClick(){
    this.router.navigate(['/homePage']);
  }

}
