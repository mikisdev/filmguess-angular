import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
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
  selector: 'custom-input',
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.css',
  providers: getNgValueAccessorFor(CustomInputComponent)
})
export class CustomInputComponent implements ControlValueAccessor {
  @Input('placeholder') public placeholder: string = '';
  @Input('type') public type: string = '';
  @Input() disabled: boolean = false;

  @Output('is-focused') isFocusedEvent = new EventEmitter<boolean>();

  password: boolean = false;
  value: any;

  notifyChange = (value: number) => {};
  notifyTouched = () => {};
  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(notifyChange: (value: number) => {}) {
    this.notifyChange = notifyChange;
  }
  registerOnTouched(notifyTouched: () => void) {
    this.notifyTouched = notifyTouched;
  }
  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
  public notifyOnFocus() {
    this.isFocusedEvent.emit(true);
  }
  public notifyOnBlur() {
    this.isFocusedEvent.emit(false);
  }
}
