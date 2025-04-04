import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const matchPassword = (passwordKey: string, confirmPasswordKey: string): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get(passwordKey)?.value;
    const confirmPassword = control.get(confirmPasswordKey)?.value;

    // Kiểm tra xem một trong các trường bị rỗng không
    if (!password || !confirmPassword) {
      return null; // Nếu một trong hai trường rỗng, không kiểm tra sự trùng khớp
    }

    // Kiểm tra password có khớp với confirmPassword không
    return password === confirmPassword ? null : { passwordMismatch: true };
  };
};
