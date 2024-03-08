import { Component, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordService } from '../../services/password.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './password-form.component.html',
})
export class PasswordInputComponent implements ControlValueAccessor {
  @Output() passwordStrengthChange = new EventEmitter<string>();

  password = new FormControl<string>('', {
    nonNullable: true,
  });
  isShown: boolean = false;

  constructor(
    private passwordService: PasswordService,
  ) { }

  private onChange: (value: any) => void = () => { };
  private onTouched: () => void = () => { };

  writeValue(value: string): void {
    this.password.setValue(value || '');
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onInputChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.password.setValue(value);
    this.onChange(this.password);
    this.onTouched();
    this.checkPasswordStrength();
  }

  checkPasswordStrength() {
    this.passwordStrengthChange.emit(this.passwordService.checkPasswordStrength(this.password.value));
  }

  togglePasswordVisibility() {
    this.isShown = !this.isShown;
  }
}
