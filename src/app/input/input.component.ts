import { Component, Input } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: false,

  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() control: FormControl = new FormControl();
}
