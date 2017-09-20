import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BadgeBuilderService } from '../badge-builder.service';
import { ActivatedRoute, Router } from '@angular/router';
import {GoogleAnalyticsEventsService} from "../../google-analytics-events.service";

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-email-collector',
  templateUrl: './email-collector.component.html',
  styleUrls: ['./email-collector.component.css']
})
export class EmailCollectorComponent implements OnInit {

  action: any;
  complexForm: FormGroup;
  mode = 'initial'; // [initial | uploading]

  // We are passing an instance of the FormBuilder to our constructor
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: BadgeBuilderService,
    private GA: GoogleAnalyticsEventsService
  ) {
    // Here we are using the FormBuilder to build out our form.
    this.complexForm = fb.group({
      'name' : ['', Validators.compose([Validators.required])],
      'email' : ['', Validators.compose([
        Validators.required, 
        Validators.pattern(EMAIL_REGEX),
      ])],
      'festival_news': true,
    });

      service.onPrizeEntryStart.subscribe(() => {
        this.mode = 'uploading';
      });


  }

  ngOnInit() {
    this.action = this.route.parent.snapshot.data.action;
  }

  submitForm(value: any): void {

    this.GA.emitEvent("competition", "entry", this.action.title, this.action.id);

    this.service.enterPrizeDraw(value.email, value.name, value.festival_news)
      .then(data => {
        this.router.navigate(['/badgeBuilder/' + this.action.id + '/complete']);
      },
      err => {
        console.error(err);
      });
  }


}
