import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BadgeBuilderService } from '../badge-builder.service';

@Component({
  selector: 'app-badge-builder-complete',
  templateUrl: './badge-builder-complete.component.html',
  styleUrls: ['./badge-builder-complete.component.css']
})
export class BadgeBuilderCompleteComponent implements OnInit {

  action: any;

  constructor(
    private route: ActivatedRoute,
    service: BadgeBuilderService
  ) { }

  ngOnInit() {
    this.action = this.route.parent.snapshot.data.action;
  }

}
