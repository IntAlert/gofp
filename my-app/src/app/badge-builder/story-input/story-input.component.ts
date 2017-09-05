import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-input',
  templateUrl: './story-input.component.html',
  styleUrls: ['./story-input.component.css']
})
export class StoryInputComponent implements OnInit {

  mode: String = 'initial'; // [initial || submit || complete]

  constructor() { }

  ngOnInit() {
  }

}
