import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('signupForm', { static: false }) sgnForm!: NgForm;
  // method which show form what to do after clicking submit button
  onSubmit() {
    console.log(this.sgnForm.value);
  }
}
