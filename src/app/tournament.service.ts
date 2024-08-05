import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Tournament } from './tournament';
import { HttpClient } from '@angular/common/http';
import { Ground } from './ground';
import { VenueLocation } from './venue-location';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  url="http://localhost:8080";
  constructor(private http:HttpClient) { }
  getTournamentDetails():Observable<Tournament[]>{
    return this.http.get<any>(`${this.url}/getTournament`).pipe(
      map(response=> response.data as Tournament[])
    )
  }
  getTournamentById(id:number):Observable<Tournament>{
    return this.http.get<any>(`${this.url}/getTournament/${id}`)
   }

   getVenueLocationByTitle(title:string):Observable<VenueLocation>{
      return this.http.get<any>(`${this.url}/getFutsalByTitle/${title}`)
   }
}
