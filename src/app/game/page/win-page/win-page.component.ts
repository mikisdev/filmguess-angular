import { Component, Input, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { Movie } from '../../../shared/interfaces/movie.interface';
import { MovieService } from '../../../movies/services/movies.service';

@Component({
  selector: 'app-win-page',
  templateUrl: './win-page.component.html',
})
export class WinPageComponent implements OnInit {

  movie?: Movie

  constructor(
    private moviesService: MovieService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ){}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.moviesService.getMovieById(id))
    ) .subscribe(
      movie => {
        if(!movie) return this.router.navigate(['../movies/home'])

        this.movie = movie
        return
      }
    )
  }

}
