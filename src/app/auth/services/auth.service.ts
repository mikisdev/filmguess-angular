import { inject, Injectable } from '@angular/core';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User
} from '@angular/fire/auth';
import { catchError, from, Observable, throwError } from 'rxjs';

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
        let errorMsg = this.getRegisterErrorMessage(error.code);
        return throwError(() => new Error(errorMsg));
      })
    );
  }

  public login(email: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
      catchError((error) => {
        let errorMsg = this.getLoginErrorMessage(error.code);
        console.log(error.code);
        return throwError(() => new Error(errorMsg));
      })
    );
  }

  public loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    return from(signInWithPopup(this.auth, provider)).pipe(
      catchError((error) => {
        const msg = this.getGoogleLoginErrorMessage(error.code);
        return throwError(() => new Error(msg));
      })
    );
  }

  public logout() {
    return from(this.auth.signOut());
  }

  public getAuthState(): Observable<User | null> {
    return authState(this.auth);
  }

  resetPassword(email: string) {
    return from(sendPasswordResetEmail(this.auth, email)).pipe(
      catchError((error) => {
        return throwError(() => new Error('Error al enviar el correo de recuperación.'));
      })
    );
  }

  private getLoginErrorMessage(errorCode: string): string {
    switch (errorCode) {
      case 'auth/invalid-email':
        return 'El correo ingresado no es válido.';
      case 'auth/user-disabled':
        return 'Este usuario ha sido deshabilitado.';
      case 'auth/user-not-found':
        return 'No se encontró una cuenta con este correo.';
      case 'auth/wrong-password':
        return 'La contraseña es incorrecta.';
      case 'auth/invalid-credential':
        return 'Usuario o contraseña incorrectos';
      default:
        return 'Ocurrió un error al iniciar sesión.';
    }
  }

  private getRegisterErrorMessage(errorCode: string): string {
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

  private getGoogleLoginErrorMessage(code: string): string {
    switch (code) {
      case 'auth/popup-closed-by-user':
        return 'La ventana emergente se cerró antes de completar el inicio de sesión.';
      case 'auth/popup-blocked':
        return 'El navegador bloqueó la ventana emergente.';
      case 'auth/cancelled-popup-request':
        return 'Se canceló la ventana emergente anterior.';
      default:
        return 'Error al iniciar sesión con Google.';
    }
  }
}
