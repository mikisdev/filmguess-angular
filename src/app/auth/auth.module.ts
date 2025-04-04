import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInputComponent } from './components/auth-input/auth-input.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MoviesModule } from '../movies/movies.module';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [LoginPageComponent, LayoutPageComponent, SignupPageComponent, AuthInputComponent],
  imports: [CommonModule, AuthRoutingModule, MoviesModule, ReactiveFormsModule, FormsModule, MaterialModule]
})
export class AuthModule {}
