import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Movie } from '../../../shared/interfaces/movie.interface';
import { MovieService } from '../../../movies/services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'game-page',
  templateUrl: './game-page.component.html',
  styles: ``,
})
export class GamePageComponent implements OnInit, OnDestroy {
  public movie: Movie | null = null;
  public movies: Movie[] = [];
  public guessBlur: number = 20;

  public searchInput = new FormControl('');

  private guessCounter: number = 5;

  constructor(private moviesService: MovieService, private router: Router) {}
  public ngOnDestroy(): void {
    this.movie = null;
  }

  public ngOnInit(): void {
    this.moviesService
      .getRandomMovie()
      .subscribe((movie) => (this.movie = movie));
  }

  public searchMovie(): void {
    const value: string = this.searchInput.value || '';

    this.moviesService
      .searchMovies(value)
      .subscribe((movies) => (this.movies = movies));
  }

  public guessMovie(): void {
    console.log(this.movie?.title);

    if (this.searchInput.value === this.movie?.title) {
      this.router.navigate(['/game/win', this.movie.id]);
    }

    if (this.searchInput.value !== this.movie?.title) {
      if (this.guessCounter !== 0) {
        switch (this.guessCounter) {
          case 5:
            this.guessBlur = 15;
            this.guessCounter--;
            break;
          case 4:
            this.guessBlur = 10;
            this.guessCounter--;
            break;
          case 3:
            this.guessBlur = 7;
            this.guessCounter--;
            break;
          case 2:
            this.guessBlur = 3;
            this.guessCounter--;
            break;
          case 1:
            this.guessBlur = 0;
            this.guessCounter--;
            this.router.navigate(['/game/lose', this.movie!.id]);
            break;
        }
        console.log(this.guessCounter);
      }
    }

    this.searchInput.setValue('');
  }

  public reloadPage() {
    window.location.reload();
  }
}
