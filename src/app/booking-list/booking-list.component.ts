import { Component } from '@angular/core';
import { Bookings } from '../bookings';
import { UserService } from '../user.service';

@Component({
  selector: 'app-booking-list',
  standalone: true,
  imports: [],
  templateUrl: './booking-list.component.html',
  styleUrl: './booking-list.component.css'
})
export class BookingListComponent {
  bookings:Bookings[]=[];
  constructor(private userService:UserService){
    this.userService.getUserDetailsById(Number(localStorage.getItem("userId"))).subscribe(
      (response:any)=>{
        this.bookings = response.data['futsalBookings'];
        console.log(this.bookings);
      }
    )
  }


}
