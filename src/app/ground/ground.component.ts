import { Component, inject, Input, OnInit } from '@angular/core';
import { GroundService } from '../ground.service';
import { Ground } from '../ground';
import { NgClass, NgStyle } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ground',
  standalone: true,
  imports: [NgClass,NgStyle,RouterModule],
  templateUrl: './ground.component.html',
  styleUrl: './ground.component.css'
})
export class GroundComponent {
  groundList:Ground[]=[];
  @Input() slicedList:Ground[]=[];
  groundService:GroundService = inject(GroundService);
  constructor(){  
    this.slicedList = this.slicedList.slice(0,8);
  }
  // ngOnInit(): void {
  //   // this.groundService.getGroundDetails().subscribe(
  //   //   (ground)=>{
  //   //     console.log(ground);
  //   //     this.groundList=ground;
  //   //     this.slicedList=ground.slice(0,8);
  //   //   }
  //   //   )
  //     }
  }

