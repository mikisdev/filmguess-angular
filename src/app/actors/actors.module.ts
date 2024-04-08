import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorPageComponent } from './pages/actor-page/actor-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';

import { SharedModule } from '../shared/shared.module';
import { ActorsRoutingModule } from './actors-routing.module';
import { MoviesCardComponent } from './components/movies-card/movies-card.component';



@NgModule({
  declarations: [
    ActorPageComponent,
    LayoutPageComponent,
    MoviesCardComponent,
  ],
  imports: [
    CommonModule,
    ActorsRoutingModule,
    SharedModule
  ]
})
export class ActorsModule { }
