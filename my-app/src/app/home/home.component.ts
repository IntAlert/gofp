import { Component, OnInit } from '@angular/core';
import { ActionService } from '../action.service';
import { BadgeService } from '../badge.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  actions: any;
  badgeCount: Number

  constructor(private actionService: ActionService, private badgeService: BadgeService) { }

  ngOnInit() {

    // load actions
    this.actions = this.actionService.actions
    this.actionService.onActionsLoaded.subscribe(() => {
      this.actions = this.actionService.actions
    })

    // load count
    this.badgeCount = this.badgeService.count
    this.badgeService.onCountLoaded.subscribe(() => {
      this.badgeCount = this.badgeService.count
    })
  }

}
