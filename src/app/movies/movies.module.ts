import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CardComponent } from './components/card/card.component';
import { PosterPatchPipe } from './pipes/poster-patch.pipe';
import { ListPageComponent } from './pages/list-page/list-page.component';

import { GamePageComponent } from './pages/game-page/game-page.component';
import { MaterialModule } from '../material/material.module';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NowPlayingPageComponent } from './pages/now-playing-page/now-playing-page.component';
import { SearchComponent } from './components/search/search.component';
import { SliderComponent } from './components/slider/slider.component';
import { GridCardComponent } from './components/grid-card/grid-card.component';
import { UpcomingPageComponent } from './pages/upcoming-page/upcoming-page.component';
import { TopRatedPageComponent } from './pages/top-rated-page/top-rated-page.component';



@NgModule({
  declarations: [
    CardComponent,
    GamePageComponent,
    LayoutPageComponent,
    ListPageComponent,
    MoviePageComponent,
    NavbarComponent,
    NowPlayingPageComponent,
    PosterPatchPipe,
    SearchComponent,
    SliderComponent,
    GridCardComponent,
    UpcomingPageComponent,
    TopRatedPageComponent,
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
