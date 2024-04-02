import { Component, Input } from '@angular/core';
import { Movie } from '../../../shared/interfaces/movie.interface';

@Component({
  selector: 'movies-grid-card',
  templateUrl: './grid-card.component.html',
  styleUrl: './grid-card.component.css'
})
export class GridCardComponent {

  @Input()
  movie!: Movie

}
