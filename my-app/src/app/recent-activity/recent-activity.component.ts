import { Component, OnInit } from '@angular/core';
import { BadgeService } from '../badge.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-recent-activity',
  templateUrl: './recent-activity.component.html',
  styleUrls: ['./recent-activity.component.css']
})
export class RecentActivityComponent implements OnInit {

  constructor(
    private badgeService: BadgeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.badgeService.loadRecentBadges();
    // scroll to top, on nvaigate
    // console.log('yo');
    // this.router.events.subscribe((evt) => {
    //     if (!(evt instanceof NavigationEnd)) {
    //         return;
    //     }
    //     console.log('yep');
    //     document.body.scrollTop = 0;
    // });
  }

}
