import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ActorPageComponent } from './pages/actor-page/actor-page.component';





const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: ':id',
        component: ActorPageComponent
      },

    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActorsRoutingModule { }
