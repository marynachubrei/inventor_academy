import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent  {
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      userName: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15)
      ]),
      password: new FormControl(null, [
        Validators.required
      ]),
      emails: new FormArray([])
    });
  }
}
