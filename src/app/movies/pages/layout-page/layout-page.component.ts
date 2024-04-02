import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../shared/interfaces/movie.interface';
import { MovieService } from '../../services/movies.service';

@Component({
  selector: 'movies-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})
export class LayoutPageComponent {

  public sidebarItems = [
    { label: 'Página principal', icon: 'label'},
    { label: 'Películas favoritas', icon: 'grade'},
    { label: 'Buscar películas', icon: 'search'},
  ]

}
