import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MovieCollectionService } from '../../services/movies-collection.service';

@Component({
  selector: 'popup-add-movie',
  templateUrl: './popup-add-movie.component.html',
  styleUrl: './popup-add-movie.component.css'
})
export class PopupAddMovieComponent {
  public selectedList: string | null = null;
  @Input() isVisible = false;
  @Input() lists: string[] = [];
  @Output() isVisibleChange = new EventEmitter<boolean>();

  constructor(private readonly movieCollectionService: MovieCollectionService) {}

  public close(value: boolean): void {
    this.isVisible = value;
    this.isVisibleChange.emit(value);
  }

  public onCreate(collection: string | null) {
    if (collection) {
      this.movieCollectionService.addMovieToCollection(collection, '950387');
      this.close(false);
    }
  }
}
