import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { MoviesModule } from '../movies/movies.module';

@NgModule({
  declarations: [LoginPageComponent, LayoutPageComponent, SignupPageComponent],
  imports: [CommonModule, AuthRoutingModule, MoviesModule]
})
export class AuthModule {}
