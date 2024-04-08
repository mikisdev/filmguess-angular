import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ActorDetails } from '../../interfaces/actor-details.interface';
import { ActorService } from '../../services/actor.service';
import { pipe, switchMap } from 'rxjs';
import { Cast } from '../../interfaces/actor-movies.interface';

@Component({
  selector: 'app-actor-page',
  templateUrl: './actor-page.component.html',
  styles: ``
})
export class ActorPageComponent implements OnInit{

  actorDetails?: ActorDetails
  actormovies?: Cast[]
  biographyParagraphs?: string[]

  constructor(
    private actorService: ActorService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.actorService.getActorDetails(id))
    ) .subscribe(
      actor => {
        if(!actor) return this.router.navigate(['../movies/home'])

        this.actorDetails = actor
        this.biographyParagraphs = actor.biography.split('\n\n')

        return
      }
    )

    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.actorService.getActorMovies(id))
    ) .subscribe(
      actormovies => {
        if(!actormovies) return this.router.navigate(['../movies/home'])

        this.actormovies = actormovies
        return
      }
    )
  }

}
