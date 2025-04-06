import { Injectable } from '@angular/core';
import { updateDoc, arrayUnion, doc, Firestore, arrayRemove, getDoc } from '@angular/fire/firestore';
import { from, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MovieCollectionService {
  constructor(private readonly firestore: Firestore) {}

  // public addFavorite(userId: string, movieId: string) {
  //   const userRef = doc(this.firestore, `users/${userId}`);
  //   return from(
  //     updateDoc(userRef, {
  //       favorites: arrayUnion(movieId)
  //     })
  //   );
  // }

  // public removeFavorite(userId: string, movieId: string) {
  //   const userRef = doc(this.firestore, `users/${userId}`);
  //   return from(
  //     updateDoc(userRef, {
  //       favorites: arrayRemove(movieId)
  //     })
  //   );
  // }

  // public getUserFavorites(userId: string) {
  //   const userRef = doc(this.firestore, `users/${userId}`);
  //   return from(getDoc(userRef)).pipe(
  //     map((snapshot) => {
  //       const data = snapshot.data();
  //       return data?.['favorites'] || [];
  //     })
  //   );
  // }

  public addUserCollection(uid: string, collectionName: string) {
    const userRef = doc(this.firestore, `users/${uid}`);
    const newCollection = {
      name: collectionName,
      movies: []
    };

    return updateDoc(userRef, {
      collections: arrayUnion(newCollection)
    });
  }

  public async addMovieToCollection(uid: string, collectionName: string, movieId: string) {
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

  public async getUserCollections(uid: string): Promise<any[]> {
    const userRef = doc(this.firestore, `users/${uid}`);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      const userData = userSnap.data();
      return userData?.['collections'] || []; // Devuelve el array de colecciones o vacío
    } else {
      throw new Error('Usuario no encontrado');
    }
  }
}
