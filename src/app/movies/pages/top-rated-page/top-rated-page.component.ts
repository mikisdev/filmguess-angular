import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';
import { MovieService } from '../../services/movies.service';

@Component({
  selector: 'app-top-rated-page',
  templateUrl: './top-rated-page.component.html',
  styleUrl: './top-rated-page.component.css'
})
export class TopRatedPageComponent implements OnInit{

  topRatedMovies: Movie[] = []
  private page: number = 1

  constructor(private moviesService: MovieService){}

  ngOnInit(): void {
    this.moviesService.getTopRated(1)
      .subscribe( movies => this.topRatedMovies = movies )
  }


  onScroll() :void {

    this.page ++

    this.moviesService.getTopRated(this.page)
    .subscribe( movies => this.topRatedMovies = [...this.topRatedMovies, ...movies] )

  }
}
