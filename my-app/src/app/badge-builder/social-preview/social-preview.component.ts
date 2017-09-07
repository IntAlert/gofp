import { Component, OnInit } from '@angular/core';
import { BadgeBuilderService } from '../badge-builder.service';
import { SocialBadge } from '../social-badge';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-social-preview',
  templateUrl: './social-preview.component.html',
  styleUrls: ['./social-preview.component.css']
})
export class SocialPreviewComponent implements OnInit {

  mode = 'initial'; // [initial | downloading | ready ]
  badgeDownloadProgressPercentage = 0;
  actionUserData: any;
  action: any;

  constructor(
    private route: ActivatedRoute,
    private service: BadgeBuilderService
  ) {

    // show download progress
    service.onBadgeDownloadProgress.subscribe(percentage => {
      console.log(percentage);
      this.badgeDownloadProgressPercentage = percentage;
    });

    // show preview when ready
    service.onBadgeDownloadComplete.subscribe(() => {
      this.actionUserData = this.service.getCurrentActionUserData();
      this.mode = 'ready';
    });

  }

  ngOnInit() {
    this.action = this.route.parent.snapshot.data.action;
    this.actionUserData = this.service.getCurrentActionUserData();

    // has the user refreshed this page?
    if (this.actionUserData.badge.image) {
      this.mode = 'ready';
    }
  }

}
