import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { NowPlayingPageComponent } from './pages/now-playing-page/now-playing-page.component';
import { UpcomingPageComponent } from './pages/upcoming-page/upcoming-page.component';
import { TopRatedPageComponent } from './pages/top-rated-page/top-rated-page.component';
import { HomePageComponent } from './pages/list-page/home-page.component';
import { CollectionsPageComponent } from './pages/collections-page/collections-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'home',
        component: HomePageComponent
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
        path: 'collections',
        component: CollectionsPageComponent
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {}
