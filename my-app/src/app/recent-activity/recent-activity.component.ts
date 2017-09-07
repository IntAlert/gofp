import { Component, OnInit } from '@angular/core';
import { BadgeService } from '../badge.service';

@Component({
  selector: 'app-recent-activity',
  templateUrl: './recent-activity.component.html',
  styleUrls: ['./recent-activity.component.css']
})
export class RecentActivityComponent implements OnInit {

  constructor(private badgeService: BadgeService) { }

  ngOnInit() {
    this.badgeService.loadRecentBadges();
  }

}
