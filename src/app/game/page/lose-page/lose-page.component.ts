import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { MovieService } from '../../../movies/services/movies.service';
import { Movie } from '../../../shared/interfaces/movie.interface';

@Component({
  selector: 'app-lose-page',
  templateUrl: './lose-page.component.html',
  styles: ``
})
export class LosePageComponent implements OnInit {

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
