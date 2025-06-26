import { Component, Input } from '@angular/core';
import { Movie } from '../../../shared/interfaces/movie.interface';
import { MovieCollectionService } from '../../services/movies-collection.service';
import { MoviesList } from '../../interfaces/movies-list.interface';

@Component({
  selector: 'movies-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input('movie')
  public movie!: Movie;

  @Input('is-removable')
  public isRemovable: boolean = false;

  @Input('collection')
  public collection?: MoviesList;

  constructor(private readonly movieCollectionService: MovieCollectionService) {}

  public removeMovie(): void {
    if (this.movie.id && this.collection?.listName) {
      console.log(`Eliminamos ${this.movie.id}`);
      this.movieCollectionService.removeMovieFromCollection(this.collection.listName, this.movie.id).then(() => {
        this.collection!.movies = this.collection!.movies.filter((movieId) => movieId.id !== this.movie.id);
      });
    }
  }
}
