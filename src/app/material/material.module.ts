import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  exports: [
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatIconModule
  ]
})
export class MaterialModule { }
