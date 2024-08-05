import { Component,inject } from '@angular/core';
import { Tournament } from '../tournament';
import { ActivatedRoute,Router } from '@angular/router';
import { ButtonDirective } from '../button.directive';
import { VenueLocation } from '../venue-location';
import { TournamentService } from '../tournament.service';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-tournament-details',
  standalone: true,
  imports: [ButtonDirective,NgStyle],
  templateUrl: './tournament-details.component.html',
  styleUrl: './tournament-details.component.css'
})
export class TournamentDetailsComponent {
  buttonText:string="Register";
  tournament:Tournament|undefined;
  venueLocation:VenueLocation|undefined;
  route:ActivatedRoute = inject(ActivatedRoute);
  tournamentService:TournamentService = inject(TournamentService);
  constructor(private router:Router){}
  onCrossClick(){
    this.router.navigate(['/homePage']);
  }

  ngOnInit(): void {
    const tournamentId = Number(this.route.snapshot.params['id']);
    this.tournamentService.getTournamentById(tournamentId).subscribe((tournament:any)=>{
      this.tournament = tournament.data;
      this.tournamentService.getVenueLocationByTitle(tournament.data['venue']).subscribe(
        (response:any)=>{
          console.log(response);
          this.venueLocation=response.data;
          console.log(this.venueLocation);
        }
      )
    })
  }

}
