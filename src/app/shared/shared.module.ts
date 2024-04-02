import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { ImagePatchPipe } from './pipes/image-patch.pipe';
import { NavbarComponent } from './components/menubar/navbar.component';

import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    Error404PageComponent,
    ImagePatchPipe,
    NavbarComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports:[
    ImagePatchPipe,
    NavbarComponent

  ]
})
export class SharedModule { }
