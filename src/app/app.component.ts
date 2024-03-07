import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  password: string = '';
  passwordStrength: string = '';
  isShown = false;

  checkPasswordStrength() {
    if (this.password.length === 0) {
      this.passwordStrength = '';
    } else if (this.password.length > 0 && this.password.length < 8) {
      this.passwordStrength = 'short';
    } else {
      const hasLetters = /[a-zA-Z]/.test(this.password);
      const hasDigits = /[0-9]/.test(this.password);
      const hasSymbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(this.password);

      if (hasLetters || hasDigits || hasSymbols) {
        this.passwordStrength = 'easy';
      }

      if ((hasLetters && hasSymbols) || (hasLetters && hasDigits) || (hasDigits && hasSymbols)) {
        this.passwordStrength = 'medium';
      }

      if (hasDigits && hasLetters && hasSymbols) {
        this.passwordStrength = 'strong';
      }
    }
  }

  togglePasswordVisibility() {
    this.isShown = !this.isShown;
  }
}
