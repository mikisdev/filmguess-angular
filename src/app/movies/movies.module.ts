import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CardComponent } from './components/card/card.component';
import { PosterPatchPipe } from './pipes/poster-patch.pipe';
import { ListPageComponent } from './pages/list-page/list-page.component';

import { MaterialModule } from '../material/material.module';
import { SliderComponent } from './components/slider/slider.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { SearchComponent } from './components/search/search.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';



@NgModule({
  declarations: [
    LayoutPageComponent,
    CardComponent,
    PosterPatchPipe,
    ListPageComponent,
    SliderComponent,
    NavbarComponent,
    GamePageComponent,
    SearchComponent,
    MoviePageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,


    MoviesRoutingModule
  ],
  exports: [
    LayoutPageComponent,
    CardComponent,
  ]
})
export class MoviesModule { }
