import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutPageComponent } from './page/layout-page/layout-page.component';
import { GamePageComponent } from './page/game-page/game-page.component';




const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'movie',
        component: GamePageComponent

      },
      {
        path: '**',
        redirectTo: 'movie'
      }
    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
