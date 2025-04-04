import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationsService } from '../../services/validations.service';

@Component({
  selector: 'signup-page',
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent {
  public signupForm: FormGroup;
  public isUserNameFocused: boolean = false;
  public isEmailFocused: boolean = false;
  public isPasswordFocused: boolean = false;
  public isConfirmFocused: boolean = false;

  constructor(private readonly fb: FormBuilder, private readonly validationsService: ValidationsService) {
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
    if (this.signupForm.valid) {
      console.log('usuario:', this.signupForm.value.userName);
      console.log('Correo Electrónico:', this.signupForm.value.email);
      console.log('Contraseña:', this.signupForm.value.password);
      console.log('Confirmacion Contraseña:', this.signupForm.value.confirmPassword);
    } else {
      console.log('registro no válido');
    }
    this.signupForm.markAllAsTouched();
  }
}
