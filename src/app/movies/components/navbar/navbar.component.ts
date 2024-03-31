import { Component } from '@angular/core';

@Component({
  selector: 'movie-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


  navbarItem = [
    {label: 'Home', url: './'},
    {label: 'Buscar películas', url: './'},
    {label: 'Películas favoritas', url: './'},
  ]

}
