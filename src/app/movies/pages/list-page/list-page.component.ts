import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';
import { MovieService } from '../../services/movies.service';

@Component({
  selector: 'movie-list-page',
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent implements OnInit{


  public popularMovies: Movie[] = []
  public nowPlayingMovies: Movie[] = []
  public upcomingMovies: Movie[] = []


  constructor(private movieService: MovieService){}

  ngOnInit(): void {
    this.movieService.getPopular(1)
      .subscribe( movies => this.popularMovies = movies)

    this.movieService.getNowPlaying(1)
      .subscribe( movies => this.nowPlayingMovies = movies)

     this.movieService.getUpcoming(1)
      .subscribe( movies => this.upcomingMovies = movies)


  }

}
