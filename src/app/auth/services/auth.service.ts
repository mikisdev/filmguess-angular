import { Injectable } from '@angular/core';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  User
} from '@angular/fire/auth';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';
import { catchError, from, Observable, switchMap, throwError } from 'rxjs';
import { UserModel } from '../interfaces/user.model';
import { HandleAuthErrorsService } from './handle-auth-errors.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private readonly firestore: Firestore,
    private readonly auth: Auth,
    private readonly handleAuthErrors: HandleAuthErrorsService
  ) {}

  public register(user: UserModel) {
    return from(this.createFirebaseUser(user.email, user.password)).pipe(
      switchMap((userCredential) => this.saveUserData(userCredential.user.uid, user)),
      catchError((error) => this.handleAuthErrors.handleRegisterError(error))
    );
  }

  public login(email: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
      catchError((error) => this.handleAuthErrors.handleLoginError(error))
    );
  }

  public loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    return from(signInWithPopup(this.auth, provider)).pipe(
      catchError((error) => this.handleAuthErrors.handleGoogleLoginError(error))
    );
  }

  public logout() {
    return from(this.auth.signOut());
  }

  public getAuthState(): Observable<User | null> {
    return authState(this.auth);
  }

  public resetPassword(email: string) {
    return from(sendPasswordResetEmail(this.auth, email)).pipe(
      catchError((error) => {
        return throwError(() => new Error('Error al enviar el correo de recuperación.'));
      })
    );
  }

  public isAuthenticated(): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      const unsubscribe = onAuthStateChanged(this.auth, (user) => {
        observer.next(!!user);
      });
      return unsubscribe;
    });
  }

  private createFirebaseUser(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  private saveUserData(uid: string, user: UserModel) {
    const userRef = doc(this.firestore, `users/${uid}`);
    const userData = {
      userName: user.userName,
      email: user.email,
      photoURL: user.profilePic,
      favorites: [],
      viewed: []
    };
    return from(setDoc(userRef, userData));
  }
}
