import { Injectable } from '@angular/core';

import { enviroments } from '../../../environments/enviroments';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ActorDetails } from '../interfaces/actor-details.interface';
import { ActorMovies, Cast } from '../interfaces/actor-movies.interface';

@Injectable({providedIn: 'root'})
export class ActorService {

  private baseUrl: string = enviroments.baseUrl
  private auth: string = enviroments.auth

  private params = new HttpParams()
  .set('language', 'es-ES')

  private headers = new HttpHeaders()
  .set('Authorization', this.auth)

  constructor(private http: HttpClient) { }

  getActorDetails(id: string) :Observable<ActorDetails>{
    const params = this.params
    const headers = this.headers

    return this.http.get<ActorDetails>(`${this.baseUrl}/person/${id}`,{headers, params})
      .pipe(
        map( (actor: ActorDetails ) => actor)
      )
  }

  getActorMovies(id: string) :Observable<Cast[]>{
    const params = this.params
    const headers = this.headers

    return this.http.get<ActorMovies>(`${this.baseUrl}/person/${id}/movie_credits`,{headers, params})
      .pipe(
        map( (actorMovies: ActorMovies) => actorMovies.cast )
      )
  }

}
