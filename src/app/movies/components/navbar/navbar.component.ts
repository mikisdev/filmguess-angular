import { Component } from '@angular/core';

@Component({
  selector: 'movie-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


  navbarItem = [
    {label: 'Home', url: 'home'},
    {label: 'Películas favoritas', url: './'},
    {label: 'Adivinar la película', url: 'game'},
  ]

}
