import { Component } from '@angular/core';
import { MoviesList } from '../../interfaces/movies-list.interface';
import { MovieService } from '../../services/movies.service';

@Component({
  selector: 'movies-collections-page',
  templateUrl: './collections-page.component.html',
  styleUrl: './collections-page.component.css'
})
export class CollectionsPageComponent {
  public moviesList: MoviesList[] = [];

  constructor(private movieService: MovieService) {}
}
