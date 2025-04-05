import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationsService } from '../../services/validations.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  public loginForm: FormGroup;
  public errorMessage: string = '';
  public isLoginFailed: boolean = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly validationsService: ValidationsService,
    private readonly authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.validationsService.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  public isValidField(field: string): boolean | null {
    return this.validationsService.isValidField(field, this.loginForm);
  }

  public onLogin(): void {
    this.formValid();
    this.loginForm.markAllAsTouched();
  }

  private formValid(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
        next: (userCredential) => {
          console.log('Sesión iniciada:', userCredential.user);
          // redirigir al dashboard, etc.
        },
        error: (error) => {
          this.isLoginFailed = true;
          console.error('Error al iniciar sesión:', error.message);
          this.errorMessage = error.message; // mostrarlo en el template
        }
      });
    }
  }
}
