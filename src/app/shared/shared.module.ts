import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { ImagePatchPipe } from './pipes/image-patch.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';

import { MaterialModule } from '../material/material.module';
import { CustomPopupComponent } from './components/custom-popup/custom-popup.component';

@NgModule({
  declarations: [Error404PageComponent, ImagePatchPipe, NavbarComponent, CustomPopupComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [ImagePatchPipe, NavbarComponent, CustomPopupComponent]
})
export class SharedModule {}
