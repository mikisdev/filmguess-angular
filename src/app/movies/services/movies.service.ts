import { Injectable } from '@angular/core';
import { Observable, map, of, switchMap } from 'rxjs';
import { Movie } from '../../shared/interfaces/movie.interface';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { MovieResponse } from '../../shared/interfaces/movie-response.interface';
import { enviroments } from '../../../environments/enviroments';
import {
  MovieProvidersResponse,
  Result,
} from '../../shared/interfaces/provider-response.interface';
import {
  Cast,
  CreditResponse,
} from '../../shared/interfaces/credit-response.interface';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private readonly baseUrl: string = enviroments.baseUrl;
  private readonly apiKey: string = enviroments.apiKey;
  private readonly auth: string = enviroments.auth;

  private params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('language', 'es-ES')
    .set('include_adult', false);

  private headers = new HttpHeaders().set('Authorization', this.auth);

  constructor(private readonly http: HttpClient) {}

  getPopular(page: number = 1): Observable<Movie[]> {
    const params = this.params.append('page', page);

    return this.http
      .get<MovieResponse>(`${this.baseUrl}/movie/popular`, {
        params,
        headers: this.headers,
      })
      .pipe(map((response: MovieResponse) => response.results));
  }

  getNowPlaying(page: number = 1): Observable<Movie[]> {
    const params = this.params.append('page', page);

    return this.http
      .get<MovieResponse>(`${this.baseUrl}/movie/now_playing`, {
        params,
        headers: this.headers,
      })
      .pipe(map((response: MovieResponse) => response.results));
  }

  getUpcoming(page: number = 1): Observable<Movie[]> {
    const params = this.params.append('page', page);

    return this.http
      .get<MovieResponse>(`${this.baseUrl}/movie/upcoming`, {
        params,
        headers: this.headers,
      })
      .pipe(map((response: MovieResponse) => response.results));
  }

  getTopRated(page: number = 1): Observable<Movie[]> {
    const params = this.params.append('page', page);

    return this.http
      .get<MovieResponse>(`${this.baseUrl}/movie/top_rated`, {
        params,
        headers: this.headers,
      })
      .pipe(map((response: MovieResponse) => response.results));
  }

  getMovieById(id: string): Observable<Movie> {
    const params = this.params;

    return this.http
      .get<Movie>(`${this.baseUrl}/movie/${id}`, {
        params,
        headers: this.headers,
      })
      .pipe(map((response: Movie) => response));
  }

  searchMovies(query: string): Observable<Movie[]> {
    const params = this.params.append('query', query);

    return this.http
      .get<MovieResponse>(`${this.baseUrl}/search/movie`, {
        params,
        headers: this.headers,
      })
      .pipe(map((response: MovieResponse) => response.results));
  }

  getRandomMovie(): Observable<Movie> {
    const params = this.params.append(
      'page',
      Math.floor(Math.random() * 100) + 1
    );

    return this.http
      .get<MovieResponse>(`${this.baseUrl}/movie/top_rated`, {
        params,
        headers: this.headers,
      })
      .pipe(
        switchMap((response: MovieResponse) =>
          of(response.results[Math.floor(Math.random() * 19) + 0])
        ) // Use switchMap for side effects (if necessary)
      );
  }

  getMovieProviders(id: number): Observable<Result> {
    return this.http
      .get<MovieProvidersResponse>(
        `${this.baseUrl}/movie/${id}/watch/providers`,
        { headers: this.headers }
      )
      .pipe(
        map((response: MovieProvidersResponse) => {
          console.log(response.results['ES']);
          return response.results['ES'];
        })
      );
  }

  getMovieCast(id: number): Observable<Cast[]> {
    const params = this.params;

    return this.http
      .get<CreditResponse>(`${this.baseUrl}/movie/${id}/credits`, {
        params,
        headers: this.headers,
      })
      .pipe(switchMap((response: CreditResponse) => of(response.cast)));
  }
}
