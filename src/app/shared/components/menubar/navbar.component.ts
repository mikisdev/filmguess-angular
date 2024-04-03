import { Component } from '@angular/core';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  navbarItem = [
    {label: 'Home', icon: 'movie', url: '../movies'},
    {label: 'Películas favoritas', icon: 'star', url: './'},
    {label: 'Adivinar la película', icon: 'videogame_asset', url: '../game'},
  ]

}
