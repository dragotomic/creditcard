import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export const forbiddenNameValidator = (
  forbiddenNames: string[]
): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    return forbiddenNames.includes(control.value)
      ? { forbiddenName: 'Name ' + control.value + ' is not allowed' }
      : null;
  };
};

@Component({
  selector: 'app-card-form',
  standalone: false,

  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css',
})
export class CardFormComponent {
  cardForm = new FormGroup({
    name: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(5),
        forbiddenNameValidator(['foo', 'bar']),
      ],
    }),
  });
}
