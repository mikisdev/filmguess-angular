import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Movie } from '../../../shared/interfaces/movie.interface';
import { MovieService } from '../../services/movies.service';

@Component({
  selector: 'movie-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  public searchInput = new FormControl('');
  public movies: Movie[] = [];

  constructor(private moviesService: MovieService) {}

  searchMovie(): void {
    const value: string = this.searchInput.value || '';

    this.moviesService.searchMovies(value).subscribe((movies) => (this.movies = movies));
  }
}
