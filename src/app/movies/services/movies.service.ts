import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Movie } from '../../shared/interfaces/movie.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MovieResponse } from '../../shared/interfaces/movie-response.interface';
import { enviroments } from '../../../environments/enviroments';

@Injectable({providedIn: 'root'})
export class MovieService {

  private baseUrl: string = enviroments.baseUrl
  private apiKey: string = enviroments.apiKey
  private params = new HttpParams()
  .set('api_key', this.apiKey)
  .set('language', 'es-ES')
  .set('include_adult', false)

  constructor(private http: HttpClient) { }

  getPopular(page: number = 1) :Observable<Movie[]> {

    const params = this.params.append('page', page)

    return this.http.get<MovieResponse>(`${this.baseUrl}/movie/popular`,{params})
      .pipe(
        map((response: MovieResponse) => response.results)
      )
  }

  getNowPlaying(page: number = 1) :Observable<Movie[]> {

    const params = this.params.append('page', page)

    return this.http.get<MovieResponse>(`${this.baseUrl}/movie/now_playing`,{params})
      .pipe(
        map((response: MovieResponse) => response.results)
      )
  }

  getUpcoming(page: number = 1) :Observable<Movie[]> {

    const params = this.params.append('page', page)

    return this.http.get<MovieResponse>(`${this.baseUrl}/movie/upcoming`,{params})
      .pipe(
        map((response: MovieResponse) => response.results)
      )
  }

  getTopRated(page: number = 1) :Observable<Movie[]> {

    const params = this.params.append('page', page)

    return this.http.get<MovieResponse>(`${this.baseUrl}/movie/top_rated`,{params})
      .pipe(
        map((response: MovieResponse) => response.results)
      )
  }

  getMovieById(id: string) :Observable<Movie>{

    const params = this.params

    return this.http.get<Movie>(`${this.baseUrl}/movie/${id}`,{params})
      .pipe(
        map((response: Movie) => response)
      )
  }

  searchMovies(query: string) :Observable<Movie[]> {

    const params = this.params.append('query', query)

    return this.http.get<MovieResponse>(`${this.baseUrl}/search/movie`,{params})
      .pipe(
        map((response: MovieResponse) => response.results)
      )
  }


  getRandomMovie() :Observable<Movie>{

    const randomPage: number = Math.floor(Math.random() * 100) + 1;
    const randomIndex: number = Math.floor(Math.random() * 20) + 1;

    const params = this.params.append('page', randomPage)

    return this.http.get<MovieResponse>(`${this.baseUrl}/movie/top_rated`,{params})
    .pipe(
      map((response: MovieResponse) => response.results[ randomIndex - 1 ]),
    )

  }


}


// getRandomMovie() :Observable<Movie>{

//   let randomPage: number
//   let randomIndex: number
//   let movie: Observable<Movie>
//   let posterPatch: string | null

//   do{
//     randomPage = Math.floor(Math.random() * 100) + 1
//     randomIndex = Math.floor(Math.random() * 20) + 1
//     let params = this.params.append('page', randomPage)

//     movie = this.http.get<MovieResponse>(`${this.baseUrl}/movie/top_rated`,{params})
//     .pipe(
//       map((response: MovieResponse) => response.results[ randomIndex - 1 ]),

//     )


//   }while(posterPatch==null)


//   return movie
// }
