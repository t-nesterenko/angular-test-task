import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password: string = '';
  strength: string = 'empty';
  message: string = '';

  checkStrength(): void {
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasNumbers = /\d/.test(this.password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);

    if (this.password.length === 0) {
      this.strength = 'empty';
      this.message = '';
    } else if (this.password.length < 8 || (!hasLetters && !hasNumbers && !hasSymbols)) {
      this.strength = 'weak';
      this.message = 'The password is weak. Make sure it contains more than 8 characters, including letters, digits, and symbols.';
    } else if (
      (hasLetters && hasNumbers && !hasSymbols) ||
      (hasLetters && hasSymbols && !hasNumbers) ||
      (hasNumbers && hasSymbols && !hasLetters)
    ) {
      this.strength = 'medium';
      this.message = 'The password is medium. Make it strong by using letters, digits, and symbols in your password.';
    } else if (hasLetters && hasNumbers && hasSymbols) {
      this.strength = 'strong';
      this.message = 'The password is strong. Great job!';
    } else {
      this.strength = 'weak';
      this.message = 'The password is weak. Make sure it contains more than 8 characters, including letters, digits, and symbols.';
    }
  }
}
