import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MovieCollectionService } from '../../services/movies-collection.service';

@Component({
  selector: 'popup-add-movie',
  templateUrl: './popup-add-movie.component.html',
  styleUrl: './popup-add-movie.component.css'
})
export class PopupAddMovieComponent {
  public selectedList: string | null = null;
  @Input('is-visible') isVisible = false;
  @Input('list') lists: string[] = [];
  @Input('movie-id') movieID: number | undefined;
  @Output('is-visible-change') isVisibleChange = new EventEmitter<boolean>();

  constructor(private readonly movieCollectionService: MovieCollectionService) {}

  public close(value: boolean): void {
    this.isVisible = value;
    this.isVisibleChange.emit(value);
  }

  public onAdd(collection?: string) {
    if (this.movieID) {
      if (collection) {
        this.movieCollectionService.addMovieToCollection(collection, this.movieID);
        this.close(false);
      }
    }
  }
}
