import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-story-input',
  templateUrl: './story-input.component.html',
  styleUrls: ['./story-input.component.css']
})
export class StoryInputComponent implements OnInit {

  storyInputForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.storyInputForm = fb.group({
      'story' : [null, Validators.required]
    });
  }

  ngOnInit() {
  }

}
