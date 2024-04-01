import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';
import { MovieService } from '../../services/movies.service';

@Component({
  selector: 'app-now-playing-page',
  templateUrl: './now-playing-page.component.html',
  styleUrl: './now-playing-page.component.css'
})
export class NowPlayingPageComponent implements OnInit{

  nowPlayingMovies: Movie[] = []
  private page: number = 1

  constructor(private moviesService: MovieService){}

  ngOnInit(): void {
    this.moviesService.getNowPlaying(1)
      .subscribe( movies => this.nowPlayingMovies = movies )
  }


  onScroll() :void {

    this.page ++

    this.moviesService.getNowPlaying(this.page)
    .subscribe( movies => this.nowPlayingMovies = [...this.nowPlayingMovies, ...movies] )

  }


}
