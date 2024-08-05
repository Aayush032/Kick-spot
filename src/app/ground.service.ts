import { Injectable } from '@angular/core';
import { Ground } from './ground';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class GroundService {
  url = "http://localhost:8080";
  groundList:Ground[]=[];
  constructor(private http:HttpClient) { }
  getGroundDetails():Observable<Ground[]>{
    return this.http.get<any>(`${this.url}/getFutsal`).pipe(
      map(response=> response.data as Ground[])
    )
  }
  getGroundById(id:number):Observable<Ground>{
   return this.http.get<any>(`${this.url}/getFutsal/${id}`)
  }
}
