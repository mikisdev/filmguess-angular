import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Movie } from '../../../shared/interfaces/movie.interface';
import { MovieService } from '../../../movies/services/movies.service';

@Component({
  selector: 'game-page',
  templateUrl: './game-page.component.html',
  styles: ``
})
export class GamePageComponent implements OnInit{

  movie?: Movie
  movies: Movie[] = []
  guessBlur: number = 20

  searchInput = new FormControl('')

  private guessCounter: number = 5



  constructor(private moviesService: MovieService){}

  ngOnInit(): void {
    this.moviesService.getRandomMovie()
      .subscribe(movie => this.movie = movie)

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
            console.log('LOSE')

            break
        }
        console.log(this.guessCounter)
      }
    } else{
      console.log('WIN')
    }

    this.searchInput.setValue('')

  }

}
