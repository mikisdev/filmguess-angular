import { inject, Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from '@angular/fire/auth';
import { catchError, from, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly auth: Auth = inject(Auth);

  constructor() {}

  public getAuth() {
    return getAuth();
  }

  public register(email: string, password: string) {
    return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(
      catchError((error) => {
        let errorMsg = this.getErrorMessage(error.code);
        return throwError(() => new Error(errorMsg));
      })
    );
  }

  private getErrorMessage(errorCode: string): string {
    switch (errorCode) {
      case 'auth/email-already-in-use':
        return 'Este correo ya está en uso.';
      case 'auth/invalid-email':
        return 'El correo ingresado no es válido.';
      case 'auth/weak-password':
        return 'La contraseña es muy débil.';
      default:
        return 'Ocurrió un error al registrar el usuario.';
    }
  }

  public login(email: string, password: string) {
    return signInWithEmailAndPassword(getAuth(), email, password);
  }

  public loginWithGoogle() {
    return signInWithPopup(getAuth(), new GoogleAuthProvider());
  }

  public logout() {
    return signOut(getAuth());
  }

  public isAuthenticated(): boolean {
    return getAuth().currentUser !== null;
  }
}
