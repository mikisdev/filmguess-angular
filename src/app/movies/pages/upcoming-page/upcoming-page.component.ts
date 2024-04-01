import { Component, OnInit } from '@angular/core';

import { Movie } from '../../interfaces/movie.interface';
import { MovieService } from '../../services/movies.service';

@Component({
  selector: 'app-upcoming-page',
  templateUrl: './upcoming-page.component.html',
  styleUrl: './upcoming-page.component.css'
})
export class UpcomingPageComponent implements OnInit{

  upcomingMovies: Movie[] = []
  private page: number = 1

  constructor(private moviesService: MovieService){}

  ngOnInit(): void {
    this.moviesService.getUpcoming(1)
      .subscribe( movies => this.upcomingMovies = movies )
  }


  onScroll() :void {

    this.page ++

    this.moviesService.getUpcoming(this.page)
    .subscribe( movies => this.upcomingMovies = [...this.upcomingMovies, ...movies] )

  }
}
