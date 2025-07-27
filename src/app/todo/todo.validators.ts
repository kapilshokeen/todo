import { Validators, type ValidatorFn } from "@angular/forms"

export const todoTitleValidators: ValidatorFn[] = [
  Validators.maxLength(30),
  Validators.minLength(3),
  Validators.required
];
