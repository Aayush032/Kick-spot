import { Component } from '@angular/core';
import { GroundComponent } from "../ground/ground.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [GroundComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
