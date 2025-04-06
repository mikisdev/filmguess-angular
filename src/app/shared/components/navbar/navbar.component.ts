import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';

interface NavbarItem {
  label: string;
  icon: string;
  url: string;
}

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  public navbarItems: NavbarItem[] = [
    { label: 'Home', icon: 'movie', url: '../movies' },
    { label: 'Colecciones', icon: 'star', url: '../movies/collections' },
    { label: 'Adivinar la película', icon: 'videogame_asset', url: '../game' }
  ];

  public isMenuOpened: boolean = false;

  constructor(private readonly authService: AuthService, private readonly router: Router) {}

  public toggleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }

  public logOut(): void {
    this.authService.logout().subscribe({
      next: () => this.router.navigate(['../auth']),
      error: (err) => console.log(err)
    });
  }
}
