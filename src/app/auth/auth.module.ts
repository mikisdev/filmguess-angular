import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MoviesModule } from '../movies/movies.module';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginPageComponent, LayoutPageComponent, SignupPageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MoviesModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    SharedModule
  ]
})
export class AuthModule {}
