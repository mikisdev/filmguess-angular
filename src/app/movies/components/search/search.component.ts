import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Movie } from '../../interfaces/movie.interface';
import { MovieService } from '../../services/movies.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'movie-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent{

  public searchInput = new FormControl('')
  public movies: Movie[] = []


  constructor(private moviesService: MovieService ){}


  searchMovie() :void {
    const value: string = this.searchInput.value || ''

    this.moviesService.searchMovies(value)
      .subscribe(
        movies => this.movies = movies
      )
  }
}
