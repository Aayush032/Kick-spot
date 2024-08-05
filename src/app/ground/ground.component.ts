import { Component, inject, OnInit } from '@angular/core';
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
export class GroundComponent implements OnInit{
  groundList:Ground[]=[];
  slicedList:Ground[]=[];
  groundService:GroundService = inject(GroundService);
  ngOnInit(): void {
    this.groundService.getGroundDetails().subscribe(
      (ground)=>{
        console.log(ground);
        this.groundList=ground;
        this.slicedList=this.groundList.slice(0,8);
      }
      )
      }
  }

