import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { ImagePatchPipe } from './pipes/image-patch.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CustomPopupComponent } from './components/custom-popup/custom-popup.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';

import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [Error404PageComponent, ImagePatchPipe, NavbarComponent, CustomPopupComponent, CustomInputComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [ImagePatchPipe, NavbarComponent, CustomPopupComponent, CustomInputComponent]
})
export class SharedModule {}
