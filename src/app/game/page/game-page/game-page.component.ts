import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Movie } from '../../../shared/interfaces/movie.interface';
import { MovieService } from '../../../movies/services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'game-page',
  templateUrl: './game-page.component.html',
  styles: ``
})
export class GamePageComponent implements OnInit, OnDestroy{

  movie: Movie | null = null
  movies: Movie[] = []
  guessBlur: number = 20

  searchInput = new FormControl('')

  private guessCounter: number = 5



  constructor(
    private moviesService: MovieService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ){}
  ngOnDestroy(): void {
    this.movie = null
  }


  ngOnInit(): void {

    this.moviesService.getPopular(this.getRandomNumber(1, 100))
      .subscribe( movies => this.movie = movies[this.getRandomNumber(0, 19)] )

  }

  private getRandomNumber(min: number, max: number) :number {
    return Math.floor(Math.random() * max) - min;
  }


  searchMovie() :void {
    const value: string = this.searchInput.value || ''

    this.moviesService.searchMovies(value)
      .subscribe(
        movies => this.movies = movies
      )
  }


  guessMovie(): void{

    console.log(this.movie?.title)

    if(this.searchInput.value=== this.movie?.title) {
      this.router.navigate(['/game/win', this.movie.id])
    }

    if(this.searchInput.value!== this.movie?.title){
      if(this.guessCounter!==0){

        switch(this.guessCounter){
          case 5:
            this.guessBlur = 15
            this.guessCounter --
            break
          case 4:
            this.guessBlur = 10
            this.guessCounter --
            break
          case 3:
            this.guessBlur = 7
            this.guessCounter --
            break
          case 2:
            this.guessBlur = 3
            this.guessCounter --
            break
          case 1:
            this.guessBlur = 0
            this.guessCounter --
            this.router.navigate(['/game/lose', this.movie!.id])
            break
        }
        console.log(this.guessCounter)
      }
    }

    this.searchInput.setValue('')

  }

  reloadPage(){
    window.location.reload()
  }

}
