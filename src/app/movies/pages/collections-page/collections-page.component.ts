import { Component, OnInit } from '@angular/core';
import { MoviesList } from '../../interfaces/movies-list.interface';
import { MovieCollectionService } from '../../services/movies-collection.service';
import { collection } from '@angular/fire/firestore';

@Component({
  selector: 'movies-collections-page',
  templateUrl: './collections-page.component.html',
  styleUrl: './collections-page.component.css'
})
export class CollectionsPageComponent implements OnInit {
  public moviesList: MoviesList[] = [];
  public collections: string[] = [];
  public showCreateList = false;
  public showAddMovie = false;

  constructor(private readonly movieCollectionService: MovieCollectionService) {}

  public ngOnInit(): void {
    this.onLoad();
  }

  public openCreateListPopup(): void {
    this.showCreateList = true;
  }

  public onLoad(): void {
    this.loadMovies();
    this.loadCollections();
    console.log(this.collections);
  }

  public onDeleteCollection(collection: MoviesList): void {
    this.moviesList = this.moviesList.filter((c) => c.listName !== collection.listName);
  }

  private async loadMovies(): Promise<void> {
    this.moviesList = await this.movieCollectionService.getMoviesList();
  }
  private async loadCollections(): Promise<void> {
    this.movieCollectionService.getCollectionNamesFromCurrentUser().then((list: string[]) => {
      this.collections = list;
    });
  }
}
