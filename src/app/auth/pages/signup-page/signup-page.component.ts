import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationsService } from '../../services/validations.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'signup-page',
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent {
  public signupForm: FormGroup;
  public isPasswordFocused: boolean = false;
  public isSignupFailed: boolean = false;
  public errorMessage: string = '';

  constructor(
    private readonly fb: FormBuilder,
    private readonly validationsService: ValidationsService,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
    this.signupForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.pattern(this.validationsService.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  public isValidField(field: string): boolean | null {
    return this.validationsService.isValidField(field, this.signupForm);
  }

  public onSignup(): void {
    this.formValid();

    this.signupForm.markAllAsTouched();
  }

  private formValid(): void {
    if (this.signupForm.valid) {
      this.authService.register(this.signupForm.value.email, this.signupForm.value.password).subscribe({
        next: (userCredential) => {
          console.log('Usuario registrado:', userCredential.user);
          this.router.navigate(['../auth']);
        },
        error: (error) => {
          this.isSignupFailed = true;
          this.errorMessage = error.message;
          console.error('Error al registrar:', error.message);
        }
      });
    }
  }
}
