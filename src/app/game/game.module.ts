import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GameRoutingModule } from './game-routing.module';

import { GamePageComponent } from './page/game-page/game-page.component';
import { LayoutPageComponent } from './page/layout-page/layout-page.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LayoutPageComponent,
    GamePageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,

    GameRoutingModule,
    SharedModule
  ]
})
export class GameModule { }
