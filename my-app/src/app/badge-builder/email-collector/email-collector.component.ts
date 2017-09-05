import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BadgeBuilderService } from '../badge-builder.service';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-email-collector',
  templateUrl: './email-collector.component.html',
  styleUrls: ['./email-collector.component.css']
})
export class EmailCollectorComponent {
 

  service: BadgeBuilderService;
  // The FormGroup object as you may remember from the simple
  // form example exposes various API’s for dealing with forms. Here we are creating a new object and setting its type to FormGroup
  complexForm: FormGroup;

  ready: Boolean = false;
  complete: Boolean = false;

  // We are passing an instance of the FormBuilder to our constructor
  constructor(fb: FormBuilder, service: BadgeBuilderService){
    // Here we are using the FormBuilder to build out our form.
    this.complexForm = fb.group({
      // We can set default values by passing in the corresponding value or
      // leave blank if we wish to not set the value. For our example, we’ll default the gender to female.
      'name' : ['', Validators.compose([Validators.required])],
      'email' : ['as.thomson@gmail.com', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEX)])],
      'festival_news': true,
    });

    this.service = service;

    // show loading until ready
    this.service.onUploadStart.subscribe(stage => {
      this.ready = false;
    });

    // show preview when ready
    this.service.onShare.subscribe(stage => {
      this.ready = true;
    });
  }


  submitForm(value: any): void {

    this.service.enterPrizeDraw(value.email, value.festival_news)
      .subscribe(data => {
        this.complete = true;
      },
      err => {
        console.error(err);
      });
  }


}
