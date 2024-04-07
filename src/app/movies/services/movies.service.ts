import { Injectable, Provider } from '@angular/core';
import { Observable, map, of, switchMap, tap } from 'rxjs';
import { Movie } from '../../shared/interfaces/movie.interface';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { MovieResponse } from '../../shared/interfaces/movie-response.interface';
import { enviroments } from '../../../environments/enviroments';
import { MovieProvidersResponse, Result } from '../../shared/interfaces/provider-response.interface';
import { response } from 'express';
import { Cast, CreditResponse } from '../../shared/interfaces/credit-response.interface';

@Injectable({providedIn: 'root'})
export class MovieService {

  private baseUrl: string = enviroments.baseUrl
  private apiKey: string = enviroments.apiKey
  private auth: string = enviroments.auth
  private params = new HttpParams()
  .set('api_key', this.apiKey)
  .set('language', 'es-ES')
  .set('include_adult', false)

  private headers = new HttpHeaders()
  .set('Authorization', this.auth)

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


  getRandomMovie(): Observable<Movie> {

    const params = this.params.append('page', (Math.floor(Math.random() * 100) + 1));

    return this.http.get<MovieResponse>(`${this.baseUrl}/movie/top_rated`, { params })
      .pipe(
        switchMap((response: MovieResponse) => of(response.results[Math.floor(Math.random() * 19) + 0])) // Use switchMap for side effects (if necessary)
      );
  }

  getMovieProviders(id: number): Observable<Result> {
    const headers = this.headers;

    return this.http.get<MovieProvidersResponse>(`${this.baseUrl}/movie/${id}/watch/providers`, { headers }).pipe(
      map((response: MovieProvidersResponse) => {
        console.log(response.results['ES'])
        return response.results['ES'];
      })
    );
  }


  getMovieCast(id: number) :Observable<Cast[]> {

    const params = this.params

    return this.http.get<CreditResponse>(`${this.baseUrl}/movie/${id}/credits`,{params})
      .pipe(
        switchMap( (response: CreditResponse) => of(response.cast))
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
