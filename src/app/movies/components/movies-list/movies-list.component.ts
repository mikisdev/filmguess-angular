import { Component, Input } from '@angular/core';
import { Movie } from '../../../shared/interfaces/movie.interface';
import { MoviesList } from '../../interfaces/movies-list.interface';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent {
  // @Input('movies') movies: Movie[] = [];
  // @Input('route') route: string = '';
  // @Input('list-name') listName: string = '';
  @Input('movies-list') moviesList: MoviesList | undefined;
}
