import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { MovieService } from '../../services/movies.service';
import { Movie } from '../../../shared/interfaces/movie.interface';
import { Provider } from '../../../shared/interfaces/provider-response.interface';
import { Cast } from '../../../shared/interfaces/credit-response.interface';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrl: './movie-page.component.css'
})
export class MoviePageComponent implements OnInit{

  movie?: Movie
  providers?: Provider[] = []
  casts?: Cast[]

  background: string =''
  poster: string =''



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
        if(!movie) return this.router.navigate(['/movies/home'])

        this.movie = movie
        this.background = 'https://image.tmdb.org/t/p/original/' +this.movie?.backdrop_path!
        this.poster = 'https://image.tmdb.org/t/p/original/' +this.movie?.poster_path!
        return
      }
    )

    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.moviesService.getMovieProviders(id))
    ) .subscribe(
      providers => {

        if(!providers) return

        this.providers = providers.flatrate
        console.log(this.providers)
        return
      }
    )

    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.moviesService.getMovieCast(id))
    ) .subscribe(
      casts => {

        if(!casts) return

        if(casts.length > 12) {
          this.casts = casts.slice(0, 12)
          return
        }

        this.casts = casts
        return
      }
    )
  }

}
