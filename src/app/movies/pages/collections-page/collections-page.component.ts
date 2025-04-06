import { Component } from '@angular/core';
import { MoviesList } from '../../interfaces/movies-list.interface';
import { MovieService } from '../../services/movies.service';
import { MovieCollectionService } from '../../services/movies-collection.service';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'movies-collections-page',
  templateUrl: './collections-page.component.html',
  styleUrl: './collections-page.component.css'
})
export class CollectionsPageComponent {
  public moviesList: MoviesList[] = [];

  constructor(
    private readonly movieService: MovieService,
    private readonly movieCollectionService: MovieCollectionService,
    private readonly authService: AuthService
  ) {
    this.moviesList = movieCollectionService.getMoviesList();
  }

  public createCollection(): void {
    this.authService.getUid().subscribe((uid) => {
      if (uid) {
        this.movieCollectionService.addUserCollection(uid, 'Favoritas');
      }
    });
  }
  public addMovieToCollection(): void {
    this.authService.getUid().subscribe((uid) => {
      if (uid) {
        this.movieCollectionService.addMovieToCollection(uid, 'Favoritas', '950387');
      }
    });
  }
  public getCollections(): void {
    this.authService.getUid().subscribe((uid) => {
      if (uid) {
        this.movieCollectionService.getUserCollections(uid);
        this.movieCollectionService.getMoviesList();
      }
    });
  }
}
