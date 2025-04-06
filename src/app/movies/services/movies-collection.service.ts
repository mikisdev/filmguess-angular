import { Injectable } from '@angular/core';
import { updateDoc, arrayUnion, doc, Firestore, arrayRemove, getDoc } from '@angular/fire/firestore';
import { from, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MovieCollectionService {
  constructor(private readonly firestore: Firestore) {}

  public addFavorite(userId: string, movieId: string) {
    const userRef = doc(this.firestore, `users/${userId}`);
    return from(
      updateDoc(userRef, {
        favorites: arrayUnion(movieId)
      })
    );
  }

  public removeFavorite(userId: string, movieId: string) {
    const userRef = doc(this.firestore, `users/${userId}`);
    return from(
      updateDoc(userRef, {
        favorites: arrayRemove(movieId)
      })
    );
  }

  public getUserFavorites(userId: string) {
    const userRef = doc(this.firestore, `users/${userId}`);
    return from(getDoc(userRef)).pipe(
      map((snapshot) => {
        const data = snapshot.data();
        return data?.['favorites'] || [];
      })
    );
  }
}
