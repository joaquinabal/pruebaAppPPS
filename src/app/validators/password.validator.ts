import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const passwordMatchValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (!password || !confirmPassword || password.value === confirmPassword.value) {
    return null; // Las contraseñas coinciden o los campos no existen
  }

  return { passwordMismatch: true }; // Las contraseñas no coinciden
};