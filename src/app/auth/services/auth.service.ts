import { Injectable } from '@angular/core';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from '@angular/fire/auth';
import { User } from '../interfaces/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor() {}

  public getAuth() {
    return getAuth();
  }

  public register(user: User) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  public login(user: User) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
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
