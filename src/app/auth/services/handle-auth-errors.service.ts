import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

enum LoginErrorMessage {
  INVALID_EMAIL = 'El correo ingresado no es válido.',
  USER_DISABLED = 'Este usuario ha sido deshabilitado.',
  USER_NOT_FOUND = 'No se encontró una cuenta con este correo.',
  WRONG_PASSWORD = 'La contraseña es incorrecta.',
  INVALID_CREDENTIAL = 'Usuario o contraseña incorrectos.',
  DEFAULT = 'Ocurrió un error al iniciar sesión.'
}

enum RegisterErrorMessage {
  EMAIL_IN_USE = 'Este correo ya está en uso.',
  EMAIL_INVALID = 'El correo ingresado no es válido.',
  WEAK_PASSWORD = 'La contraseña es muy débil.',
  DEFAULT = 'Ocurrió un error al registrar el usuario.'
}

enum GoogleLoginErrorMessage {
  POPUP_CLOSED = 'La ventana emergente se cerró antes de completar el inicio de sesión.',
  POPUP_BLOCKED = 'El navegador bloqueó la ventana emergente.',
  CANCELLED_POPUP = 'Se canceló la ventana emergente anterior.',
  DEFAULT = 'Error al iniciar sesión con Google.'
}

@Injectable({ providedIn: 'root' })
export class HandleAuthErrorsService {
  constructor() {}

  public handleRegisterError(error: any) {
    const errorMsg = this.getRegisterErrorMessage(error.code);
    return throwError(() => new Error(errorMsg));
  }

  public handleLoginError(error: any) {
    const errorMsg = this.getLoginErrorMessage(error.code);
    return throwError(() => new Error(errorMsg));
  }

  public handleGoogleLoginError(error: any) {
    const errorMsg = this.getGoogleLoginErrorMessage(error.code);
    return throwError(() => new Error(errorMsg));
  }

  private getLoginErrorMessage(errorCode: string): string {
    switch (errorCode) {
      case 'auth/invalid-email':
        return LoginErrorMessage.INVALID_EMAIL;
      case 'auth/user-disabled':
        return LoginErrorMessage.USER_DISABLED;
      case 'auth/user-not-found':
        return LoginErrorMessage.USER_NOT_FOUND;
      case 'auth/wrong-password':
        return LoginErrorMessage.WRONG_PASSWORD;
      case 'auth/invalid-credential':
        return LoginErrorMessage.INVALID_CREDENTIAL;
      default:
        return LoginErrorMessage.DEFAULT;
    }
  }

  private getRegisterErrorMessage(errorCode: string): string {
    switch (errorCode) {
      case 'auth/email-already-in-use':
        return RegisterErrorMessage.EMAIL_IN_USE;
      case 'auth/invalid-email':
        return RegisterErrorMessage.EMAIL_IN_USE;
      case 'auth/weak-password':
        return RegisterErrorMessage.WEAK_PASSWORD;
      default:
        return RegisterErrorMessage.DEFAULT;
    }
  }

  private getGoogleLoginErrorMessage(code: string): string {
    switch (code) {
      case 'auth/popup-closed-by-user':
        return GoogleLoginErrorMessage.POPUP_CLOSED;
      case 'auth/popup-blocked':
        return GoogleLoginErrorMessage.POPUP_BLOCKED;
      case 'auth/cancelled-popup-request':
        return GoogleLoginErrorMessage.CANCELLED_POPUP;
      default:
        return GoogleLoginErrorMessage.DEFAULT;
    }
  }
}
