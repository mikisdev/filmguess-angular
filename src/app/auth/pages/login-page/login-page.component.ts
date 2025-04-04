import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationsService } from '../../services/validations.service';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  public loginForm: FormGroup;

  constructor(private readonly fb: FormBuilder, private readonly validationsService: ValidationsService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.validationsService.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  public isValidField(field: string): boolean | null {
    return this.validationsService.isValidField(field, this.loginForm);
  }

  public onLogin(): void {
    if (this.loginForm.valid) {
      console.log('Correo Electrónico:', this.loginForm.value.email);
      console.log('Contraseña:', this.loginForm.value.password);
    } else {
      console.log('login no válido');
    }
    this.loginForm.markAllAsTouched();
  }
}
