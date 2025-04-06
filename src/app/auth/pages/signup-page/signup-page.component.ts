import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationsService } from '../../services/validations.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserModel } from '../../interfaces/user.model';
import { error } from 'console';

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
    this.signupForm = this.fb.group(
      {
        userName: ['', [Validators.required, Validators.minLength(6)]],
        email: ['', [Validators.required, Validators.pattern(this.validationsService.emailPattern)]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]]
      },
      {
        validators: [this.validationsService.isFieldOneEqualFieldTwo('password', 'confirmPassword')]
      }
    );
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
      const user: UserModel = {
        userName: this.signupForm.value.userName,
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
        profilePic: ''
      };

      this.registerUser(user);
    }
  }

  private registerUser(user: UserModel): void {
    this.authService.register(user).subscribe({
      next: () => this.handleRegisterSuccess(),
      error: (error) => this.handleRegisterError(error)
    });
  }

  private handleRegisterSuccess(): void {
    this.router.navigate(['../auth']);
  }

  private handleRegisterError(error: any): void {
    this.isSignupFailed = true;
    this.errorMessage = error.message;
    console.error('Error al registrar:', error.message);
  }
}
