import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationsService } from '../../services/validations.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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
    private readonly authService: AuthService,
    private readonly router: Router
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
      const { email, password } = this.loginForm.value;
      this.loginUser(email, password);
    }
  }

  private loginUser(email: string, password: string): void {
    this.authService.login(email, password).subscribe({
      next: () => this.handleLoginSuccess(),
      error: (error) => this.handleLoginError(error)
    });
  }

  private handleLoginSuccess(): void {
    this.router.navigate(['../movies']);
  }

  private handleLoginError(error: any): void {
    this.isLoginFailed = true;
    console.error('Error al iniciar sesión:', error.message);
    this.errorMessage = error.message;
  }
}
