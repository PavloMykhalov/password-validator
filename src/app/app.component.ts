import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordInputComponent } from './components/password-form/password-form.component';
import { PasswordStrengthZoneComponent } from './components/password-strength-zone/password-strength-zone.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PasswordInputComponent,
    PasswordStrengthZoneComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  passwordStrength: string = '';

  onPasswordStrengthChange(strength: string) {
    this.passwordStrength = strength;
  }
}
