import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BadgeBuilderService } from '../badge-builder.service';


@Component({
  selector: 'app-story-input',
  templateUrl: './story-input.component.html',
  styleUrls: ['./story-input.component.css']
})
export class StoryInputComponent implements OnInit {

  storyInputForm: FormGroup;
  action: any;

constructor(
    fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: BadgeBuilderService
  ) {
    this.storyInputForm = fb.group({
      'story' : [null, Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
    this.action = this.route.parent.snapshot.data.action;
  }

  submitForm(value): void {
    console.log(value);
    this.router.navigate(['/badgeBuilder/' + this.action.id + '/preview']);
  }

}
