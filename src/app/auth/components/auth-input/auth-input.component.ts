import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

function getNgValueAccessorFor(component: any) {
  return [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => component)
    }
  ];
}
@Component({
  selector: 'auth-input',
  templateUrl: './auth-input.component.html',
  styleUrl: './auth-input.component.css',
  providers: getNgValueAccessorFor(AuthInputComponent)
})
export class AuthInputComponent implements ControlValueAccessor {
  @Input('placeholder') public placeholder: string = '';
  @Input('type') public type: string = '';
  @Input() disabled: boolean = false;

  password: boolean = false;
  value: any;

  notifyChange = (value: number) => {};
  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(notifyChange: (value: number) => {}) {
    this.notifyChange = notifyChange;
  }
  registerOnTouched(fn: any): void {}
  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}
