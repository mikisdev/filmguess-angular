import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { NowPlayingPageComponent } from './pages/now-playing-page/now-playing-page.component';
import { UpcomingPageComponent } from './pages/upcoming-page/upcoming-page.component';
import { TopRatedPageComponent } from './pages/top-rated-page/top-rated-page.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'home',
        component: ListPageComponent
      },
      {
        path: 'game',
        component: GamePageComponent
      },
      {
        path: 'now-playing',
        component: NowPlayingPageComponent
      },
      {
        path: 'upcoming',
        component: UpcomingPageComponent
      },
      {
        path: 'top-rated',
        component: TopRatedPageComponent
      },
      {
        path: ':id',
        component: MoviePageComponent
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
