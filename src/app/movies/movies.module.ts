import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CardComponent } from './components/card/card.component';
import { PosterPatchPipe } from './pipes/poster-patch.pipe';
import { ListPageComponent } from './pages/list-page/list-page.component';

import { MaterialModule } from '../material/material.module';
import { SliderComponent } from './components/slider/slider.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { MoviesRoutingModule } from './movies-routing.module';



@NgModule({
  declarations: [
    LayoutPageComponent,
    CardComponent,
    PosterPatchPipe,
    ListPageComponent,
    SliderComponent,
    NavbarComponent,
    GamePageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,

    MoviesRoutingModule
  ],
  exports: [
    LayoutPageComponent,
    CardComponent,
  ]
})
export class MoviesModule { }
