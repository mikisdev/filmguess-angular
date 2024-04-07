import { Component } from '@angular/core';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  navbarItems = [
    {label: 'Home', icon: 'movie', url: '../movies'},
    {label: 'Películas favoritas', icon: 'star', url: './'},
    {label: 'Adivinar la película', icon: 'videogame_asset', url: '../game'},
  ]

  isMenuOpened: boolean = false

  toggleMenu() :void{
    this.isMenuOpened = !this.isMenuOpened
  }

}
