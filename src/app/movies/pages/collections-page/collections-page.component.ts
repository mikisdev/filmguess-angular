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
  public collections: string[] = [];
  public showCreateList = false;
  public showAddMovie = false;

  constructor(private readonly movieCollectionService: MovieCollectionService) {
    this.loadLists();
    this.loadCollections();
  }

  public openCreateListPopup() {
    this.showCreateList = true;
  }

  private async loadLists(): Promise<void> {
    this.moviesList = await this.movieCollectionService.getMoviesList();
  }
  public async loadCollections(): Promise<void> {
    this.movieCollectionService.getCollectionNamesFromCurrentUser().then((list: string[]) => {
      this.collections = list;
      console.log({ list });
    });
  }
}
