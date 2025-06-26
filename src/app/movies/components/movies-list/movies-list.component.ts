import { Component, Input, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../../shared/interfaces/movie.interface';
import { MoviesList } from '../../interfaces/movies-list.interface';
import { log } from 'node:console';
import { MovieCollectionService } from '../../services/movies-collection.service';
import { collection } from '@angular/fire/firestore';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent {
  @Input('movies-list')
  public moviesList?: MoviesList;

  @Input('is-removable')
  public isRemovable: boolean = false;

  @Input('collections')
  public collections?: MoviesList[];

  @Output('is-loading')
  public onDeleteCollection = new EventEmitter<any>();

  constructor(
    private readonly movieCollectionService: MovieCollectionService,
    private readonly changeDetector: ChangeDetectorRef
  ) {}

  public async removeList(): Promise<void> {
    console.log(1);

    if (this.moviesList?.listName) {
      console.log(2);

      await this.movieCollectionService.removeCollection(this.moviesList.listName);
      this.onDeleteCollection.emit(this.moviesList.listName);
    }
  }
}

// if (this.movie.id && this.collection?.listName) {
//   console.log(`Eliminamos ${this.movie.id}`);
//   this.movieCollectionService.removeMovieFromCollection(this.collection.listName, this.movie.id).then(() => {
//     this.collection!.movies = this.collection!.movies.filter((movieId) => movieId.id !== this.movie.id);
//   });
// }
