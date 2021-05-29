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
        Validators.required,
        this. createPasswordStrengthValidator()
      ]),
      emails: new FormArray([])
    });
  }


  // get method for receiving emails array
  get emailsFormArray() {
    return this.form.get('emails') as FormArray;
  }

  //method which show to us what we have to do with form after submit button was clicked
  onSubmit() {
    console.log(this.form);
  }

  //method which add new emails to emails array
  addControl() {
    const control  = new FormControl(null, Validators.email)
    this.emailsFormArray.push(control);
  }

  //method which remove emails from emails array
  removeControl(index: number) {
    this.emailsFormArray.removeAt(index);
  }

  //custom validator that will check whether in value there are both numbers and letters
  createPasswordStrengthValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {
        const value = control.value;
        if (!value) {
            return null;
        }
        const hasLetter = /[a-zA-Z]+/.test(value);
        const hasNumeric = /[0-9]+/.test(value);
        const passwordValid = hasLetter && hasNumeric;
        return !passwordValid ? {passwordStrength:true}: null;
    }
  }
}
