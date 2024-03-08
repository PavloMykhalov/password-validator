import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PasswordService } from '../../services/password.service';

@Component({
  selector: 'app-password-strength-zone',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './password-strength-zone.component.html',
})
export class PasswordStrengthZoneComponent {
  @Input() passwordStrength: string = '';

  getPasswordStrengthClass(sectionIndex: number) {
    switch (this.passwordStrength) {
      case 'short':
        return 'bg-red-500';
      case 'easy':
        return sectionIndex === 1 ? 'bg-red-500' : 'bg-gray-500';
      case 'medium':
        return sectionIndex === 3 ? 'bg-gray-500' : 'bg-yellow-500';
      case 'strong':
        return 'bg-green-700';
      default:
        return 'bg-gray-500';
    }
  }
}
