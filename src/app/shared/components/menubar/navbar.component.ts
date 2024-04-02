import { Component } from '@angular/core';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  navbarItem = [
    {label: 'Home', url: 'home'},
    {label: 'Películas favoritas', url: './'},
    {label: 'Adivinar la película', url: '../game'},
  ]

}
