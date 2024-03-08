import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor() { }

  checkPasswordStrength(password: string): string {
    if (password.length === 0) {
      return '';
    } else if (password.length > 0 && password.length < 8) {
      return 'short';
    } else {
      const hasLetters = /[a-zA-Z]/.test(password);
      const hasDigits = /[0-9]/.test(password);
      const hasSymbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

      if (hasLetters && hasDigits && hasSymbols) {
        return 'strong';
      }

      if ((hasLetters && hasSymbols) || (hasLetters && hasDigits) || (hasDigits && hasSymbols)) {
        return 'medium';
      }

      return 'easy';
    }
  }
}

