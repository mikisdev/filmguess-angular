import { Injectable } from '@angular/core';
import { updateDoc, arrayUnion, doc, Firestore, getDoc } from '@angular/fire/firestore';
import { MoviesList } from '../interfaces/movies-list.interface';
import { AuthService } from '../../auth/services/auth.service';
import { Movie } from '../../shared/interfaces/movie.interface';
import { MovieService } from './movies.service';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MovieCollectionService {
  constructor(
    private readonly firestore: Firestore,
    private readonly authService: AuthService,
    private movieService: MovieService
  ) {}

  public addNewCollection(collectionName: string) {
    this.authService.getUid().subscribe((uid) => {
      if (uid) {
        const userRef = doc(this.firestore, `users/${uid}`);
        const newCollection = {
          name: collectionName,
          movies: []
        };

        return updateDoc(userRef, {
          collections: arrayUnion(newCollection)
        });
      }
      return null;
    });
  }

  public async addMovieToCollection(collectionName: string, movieId: string) {
    this.authService.getUid().subscribe(async (uid) => {
      if (uid) {
        const userRef = doc(this.firestore, `users/${uid}`);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const userData = userSnap.data();
          const collections = userData['collections'] || [];

          const updatedCollections = collections.map((col: any) => {
            if (col.name === collectionName) {
              // Evita duplicados
              if (!col.movies.includes(movieId)) {
                return {
                  ...col,
                  movies: [...col.movies, movieId]
                };
              }
            }
            return col;
          });

          return updateDoc(userRef, { collections: updatedCollections });
        } else {
          throw new Error('Usuario no encontrado');
        }
      }
    });
  }

  public async removeMovieFromCollection(uid: string, collectionName: string, movieId: string) {
    const userRef = doc(this.firestore, `users/${uid}`);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      const userData = userSnap.data();
      const collections = userData['collections'] || [];

      const updatedCollections = collections.map((col: any) => {
        if (col.name === collectionName) {
          return {
            ...col,
            movies: col.movies.filter((id: string) => id !== movieId)
          };
        }
        return col;
      });

      return updateDoc(userRef, { collections: updatedCollections });
    } else {
      throw new Error('Usuario no encontrado');
    }
  }

  public getMoviesList(): MoviesList[] {
    let moviesList: MoviesList[] = [];
    this.authService.getUid().subscribe(async (uid) => {
      if (uid) {
        const collections = await this.getUserCollections(uid);

        collections.forEach((collection) => {
          const movies: Movie[] = [];
          const moviesID: string[] = collection?.['movies'];
          console.log(collection);
          moviesID.forEach((movie) => {
            this.movieService.getMovieById(movie).subscribe((movie: Movie) => {
              movies.push(movie);
            });
          });
          moviesList.push({
            movies: movies,
            url: (collection?.['name'] as string).toLowerCase(),
            listName: collection?.['name']
          });
        });
        console.log({ moviesList });
      }
    });
    return moviesList;
  }

  // public async getMoviesList(): Promise<MoviesList[]> {
  //   const moviesList: MoviesList[] = [];

  //   const uid = await firstValueFrom(this.authService.getUid());
  //   if (!uid) return [];

  //   const collections = await this.getUserCollections(uid);

  //   for (const collection of collections) {
  //     const movieIds: string[] = collection?.['movies'] || [];
  //     const movies: Movie[] = [];

  //     for (const id of movieIds) {
  //       const movie = await firstValueFrom(this.movieService.getMovieById(id));
  //       movies.push(movie);
  //     }

  //     moviesList.push({
  //       movies,
  //       url: (collection?.['name'] as string).toLowerCase(),
  //       listName: collection?.['name']
  //     });
  //   }

  //   return moviesList;
  // }

  public async getCollectionNamesFromCurrentUser(): Promise<string[]> {
    const uid = this.authService.getCurrentUid();
    if (!uid) throw new Error('Usuario no autenticado');
    return await this.getCollectionNames(uid);
  }

  private async getCollectionNames(uid: string): Promise<string[]> {
    const userRef = doc(this.firestore, `users/${uid}`);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      const userData = userSnap.data();
      const collections = userData?.['collections'] || [];

      return collections.map((collection: any) => collection.name);
    } else {
      throw new Error('Usuario no encontrado');
    }
  }

  private async getUserCollections(uid: string): Promise<any[]> {
    const userRef = doc(this.firestore, `users/${uid}`);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      const userData = userSnap.data();
      console.log(userData?.['collections']);
      return userData?.['collections'] || []; // Devuelve el array de colecciones o vacío
    } else {
      throw new Error('Usuario no encontrado');
    }
  }
}
