import { Movie } from '../../shared/interfaces/movie.interface';

export interface MoviesList {
  movies: Movie[];
  url: string;
  listName: string;
}
