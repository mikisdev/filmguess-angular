import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CardComponent } from './components/card/card.component';
import { PosterPatchPipe } from './pipes/poster-patch.pipe';
import { ListPageComponent } from './pages/list-page/list-page.component';

import { MaterialModule } from '../material/material.module';
import { SliderComponent } from './components/slider/slider.component';



@NgModule({
  declarations: [
    LayoutPageComponent,
    CardComponent,
    PosterPatchPipe,
    ListPageComponent,
    SliderComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    LayoutPageComponent,
    CardComponent,
  ]
})
export class MoviesModule { }
