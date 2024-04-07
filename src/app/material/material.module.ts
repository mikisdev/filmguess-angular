import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {CdkMenuModule} from '@angular/cdk/menu';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';







@NgModule({
  exports: [
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    InfiniteScrollModule,
    MatMenuModule,
    MatButtonModule,
    CdkMenuModule,
  ]
})
export class MaterialModule { }
