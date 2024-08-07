import { Component, inject } from '@angular/core';
import { GroundComponent } from "../ground/ground.component";
import { Ground } from '../ground';
import { GroundService } from '../ground.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [GroundComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  groundService:GroundService = inject(GroundService);
  filteredList:Ground[]=[];
  groundList:Ground[]=[];
  constructor(private router:Router){
    this.groundService.getGroundDetails().subscribe(
      (ground)=>{
        this.groundList = ground;
        this.filteredList = ground.slice(0,8);
      }
    )
  }
    onSearch(title:string){
      console.log("Serached");
      if(!title){
        console.log("no title");
         this.filteredList = this.groundList.slice(0,8);
        }
        else{
          this.filteredList = this.groundList.filter(
            ground =>
              // ground?.title.toLowerCase().includes(title.toLowerCase())
            (ground?.title && ground.title.toLowerCase().includes(title.toLowerCase())) ||
            (ground?.city && ground.city.toLowerCase().includes(title.toLowerCase())) ||
            (ground?.road && ground.road.toLowerCase().includes(title.toLowerCase()))
          );
        }
      this.goToSection("ground");
    }
      goToSection(fragment:any){
        this.router.navigateByUrl('#'+fragment);
      }
}
