import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutPageComponent } from './page/layout-page/layout-page.component';
import { GamePageComponent } from './page/game-page/game-page.component';
import { WinPageComponent } from './page/win-page/win-page.component';
import { LosePageComponent } from './page/lose-page/lose-page.component';
import { AuthGuard } from '../auth/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'movie',
        component: GamePageComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'win/:id',
        component: WinPageComponent
      },
      {
        path: 'lose/:id',
        component: LosePageComponent
      },
      {
        path: '**',
        redirectTo: 'movie'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule {}
