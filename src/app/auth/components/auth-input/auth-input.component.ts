import { Component, Input } from '@angular/core';

@Component({
  selector: 'auth-input',
  templateUrl: './auth-input.component.html',
  styleUrl: './auth-input.component.css'
})
export class AuthInputComponent {
  @Input('placeholder') public placeholder: string = '';
}
