import { Component, OnInit  } from '@angular/core';
import { BadgeBuilderService } from './badge-builder.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-badge-builder',
  templateUrl: './badge-builder.component.html',
  styleUrls: ['./badge-builder.component.css']
})
export class BadgeBuilderComponent implements OnInit {

  action: any;

  constructor(
    private route: ActivatedRoute,
    // private actionService: ActionService,
    private badgeBuilderService: BadgeBuilderService
  ) {}

  ngOnInit() {

    // set current action
    this.action = this.route.snapshot.data.action;
    // this.badgeBuilderService.setCurrentAction(this.action);

  }

}
