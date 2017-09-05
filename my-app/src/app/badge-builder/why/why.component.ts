import { Component, OnInit } from '@angular/core';
import { BadgeBuilderService } from '../badge-builder.service';

@Component({
  selector: 'app-why',
  templateUrl: './why.component.html',
  styleUrls: ['./why.component.css']
})
export class WhyComponent implements OnInit {

  service: BadgeBuilderService;
  mode: String = 'initial'; // [initial || complete]

  constructor(service: BadgeBuilderService) {
    this.service = service;
  }

  ngOnInit() {}

  registerStart() {
    this.mode = 'complete';
    this.service.registerStart();
  }

}
