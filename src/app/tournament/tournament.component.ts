import { Component, inject, OnInit } from '@angular/core';
import { NgClass,NgStyle } from '@angular/common';
import { Tournament } from '../tournament';
import { TournamentService } from '../tournament.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tournament',
  standalone: true,
  imports: [NgClass,NgStyle,RouterModule],
  templateUrl: './tournament.component.html',
  styleUrl: './tournament.component.css'
})
export class TournamentComponent implements OnInit{
  tournamentList:Tournament[]=[];
  tournamentService:TournamentService=inject(TournamentService);
  constructor(){}
  ngOnInit(): void {
    this.tournamentService.getTournamentDetails().subscribe(
      (tournament)=>{
        console.log(tournament);
        this.tournamentList=tournament;
      }
      )
      }
}
