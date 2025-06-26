import { Injectable } from '@angular/core';
import { updateDoc, arrayUnion, doc, Firestore, getDoc, collection } from '@angular/fire/firestore';
import { MoviesList } from '../interfaces/movies-list.interface';
import { AuthService } from '../../auth/services/auth.service';
import { Movie } from '../../shared/interfaces/movie.interface';
import { MovieService } from './movies.service';
import { firstValueFrom, from, of, switchMap, take } from 'rxjs';
import { Collection } from './models/collection.model';
import { error } from 'console';

@Injectable({ providedIn: 'root' })
export class MovieCollectionService {
  constructor(
    private readonly firestore: Firestore,
    private readonly authService: AuthService,
    private movieService: MovieService
  ) {}

  public async addNewCollection(collectionName: string): Promise<void> {
    try {
      const uid = await firstValueFrom(this.authService.getUid().pipe(take(1)));
      if (!uid) return;

      const userRef = doc(this.firestore, `users/${uid}`);
      const userSnapshot = await getDoc(userRef);
      if (!userSnapshot.exists()) return;

      const userData = userSnapshot.data();
      const existingCollections: Collection[] = userData.collections || [];

      const collectionExists = existingCollections.some((c) => c.name.toLowerCase() === collectionName.toLowerCase());
      if (collectionExists) return;

      const newCollection: Collection = {
        name: collectionName,
        movies: []
      };

      await updateDoc(userRef, {
        collections: arrayUnion(newCollection)
      });
    } catch (error) {
      console.error('Error al crear colección:', error);
      throw error;
    }
  }

  public async addMovieToCollection(collectionName: string, movieId: number): Promise<void> {
    try {
      const uid = await firstValueFrom(this.authService.getUid());

      if (!uid) throw new Error('Usuario no autenticado');

      const userRef = doc(this.firestore, `users/${uid}`);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) throw new Error('Usuario no encontrado');

      const userData = userSnap.data();
      const collections: Collection[] = userData['collections'] || [];

      const updatedCollections = collections.map((col: Collection) => {
        if (col.name === collectionName) {
          if (!col.movies.includes(movieId)) {
            return {
              ...col,
              movies: [...col.movies, movieId]
            };
          }
        }
        return col;
      });

      await updateDoc(userRef, { collections: updatedCollections });
    } catch (error) {
      console.error('Error al agregar película a la colección:', error);
      throw error;
    }
  }

  public async removeCollection(collectionName: string): Promise<void> {
    try {
      const uid = await firstValueFrom(this.authService.getUid());

      if (!uid) throw new Error('Usuario no autenticado');

      const userRef = doc(this.firestore, `users/${uid}`);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const userData = userSnap.data();
        const collections: Collection[] = userData['collections'] || [];
        const updatedCollections: Collection[] = collections.filter((collection) => collection.name !== collectionName);
        return updateDoc(userRef, { collections: updatedCollections });
      } else {
        throw new Error('Usuario no encontrado');
      }
    } catch (error) {
      throw error;
    }
  }

  public async removeMovieFromCollection(collectionName: string, movieId: number): Promise<void> {
    try {
      const uid = await firstValueFrom(this.authService.getUid());

      if (!uid) throw new Error('Usuario no autenticado');

      const userRef = doc(this.firestore, `users/${uid}`);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const userData = userSnap.data();
        const collections = userData['collections'] || [];

        const updatedCollections = collections.map((col: Collection) => {
          if (col.name === collectionName) {
            return {
              ...col,
              movies: col.movies.filter((id: number) => id !== movieId)
            };
          }
          return col;
        });

        return updateDoc(userRef, { collections: updatedCollections });
      } else {
        throw new Error('Usuario no encontrado');
      }
    } catch (error) {
      throw error;
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
