import { Component, Input } from '@angular/core';
import { Cast } from '../../interfaces/actor-movies.interface';

@Component({
  selector: 'actor-movies-card',
  templateUrl: './movies-card.component.html',
  styles: ``
})
export class MoviesCardComponent {

  @Input()
  actorMovie!: Cast
}
