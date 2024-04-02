import { Component, Input } from '@angular/core';
import { Movie } from '../../../shared/interfaces/movie.interface';

@Component({
  selector: 'movie-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {

  @Input()
  movie?: Movie

}
