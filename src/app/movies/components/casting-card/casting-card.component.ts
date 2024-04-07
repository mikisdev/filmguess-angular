import { Component, Input } from '@angular/core';
import { Cast } from '../../../shared/interfaces/credit-response.interface';

@Component({
  selector: 'movie-casting-card',
  templateUrl: './casting-card.component.html',
  styles: ``
})
export class CastingCardComponent {

  @Input()
  cast!: Cast
}
