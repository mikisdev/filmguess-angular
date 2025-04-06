import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../shared/interfaces/movie.interface';
import { MovieService } from '../../services/movies.service';
import { MoviesList } from '../../interfaces/movies-list.interface';

@Component({
  selector: 'movie-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  public moviesList: MoviesList[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  private loadMovies(): void {
    // Cargar las películas en cartelera
    this.movieService.getNowPlaying(1).subscribe((movies) => {
      this.moviesList.push({
        movies: movies,
        url: '/movies/now-playing',
        listName: 'En cartelera'
      });
    });

    // Cargar las películas por venir
    this.movieService.getUpcoming(1).subscribe((movies) => {
      this.moviesList.push({
        movies: movies,
        url: '/movies/upcoming',
        listName: 'Proximamente...'
      });
    });

    // Cargar las películas mejor valoradas
    this.movieService.getTopRated(1).subscribe((movies) => {
      this.moviesList.push({
        movies: movies,
        url: '/movies/top-rated',
        listName: 'Taquillazos'
      });
    });

    this.moviesList.sort((a, b) => a.listName.localeCompare(b.listName));
  }
}
