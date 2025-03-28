import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

const routes: Routes = [
  {
    path: 'movies',
    loadChildren: () => import('./movies/movies.module').then((m) => m.MoviesModule)
  },
  {
    path: 'game',
    loadChildren: () => import('./game/game.module').then((m) => m.GameModule)
  },
  {
    path: 'actor',
    loadChildren: () => import('./actors/actors.module').then((m) => m.ActorsModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: '404',
    component: Error404PageComponent
  },
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
