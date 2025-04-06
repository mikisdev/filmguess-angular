import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CardComponent } from './components/card/card.component';
import { GridCardComponent } from './components/grid-card/grid-card.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { NowPlayingPageComponent } from './pages/now-playing-page/now-playing-page.component';
import { SearchComponent } from './components/search/search.component';
import { SliderComponent } from './components/slider/slider.component';
import { TopRatedPageComponent } from './pages/top-rated-page/top-rated-page.component';
import { UpcomingPageComponent } from './pages/upcoming-page/upcoming-page.component';
import { HomePageComponent } from './pages/list-page/home-page.component';

import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { CastingCardComponent } from './components/casting-card/casting-card.component';

@NgModule({
  declarations: [
    CardComponent,
    LayoutPageComponent,
    HomePageComponent,
    MoviePageComponent,
    NowPlayingPageComponent,
    SearchComponent,
    SliderComponent,
    GridCardComponent,
    UpcomingPageComponent,
    TopRatedPageComponent,
    CastingCardComponent
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, MoviesRoutingModule, SharedModule],
  exports: [SearchComponent]
})
export class MoviesModule {}
