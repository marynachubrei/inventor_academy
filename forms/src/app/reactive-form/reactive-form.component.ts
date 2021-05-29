import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

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


  // get method for receiving emails array
  get emailsFormArray() {
    return this.form.get('emails') as FormArray;
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

}
