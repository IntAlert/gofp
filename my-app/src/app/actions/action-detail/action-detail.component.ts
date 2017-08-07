import { Component, OnInit } from '@angular/core';
import { BadgeBuilderService } from './badge-builder.service';

@Component({
  selector: 'app-action-detail',
  templateUrl: './action-detail.component.html',
  styleUrls: ['./action-detail.component.css']
})
export class ActionDetailComponent implements OnInit {

  constructor(service: BadgeBuilderService) { }

  ngOnInit() {
  }

}
