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

  mode = 'ready'; // [initial | downloading | ready ]
  badgeDownloadProgressPercentage = 0;
  badge: SocialBadge;
  action: any;

  constructor(
    private route: ActivatedRoute,
    private service: BadgeBuilderService
  ) {

    // show loading until ready
    service.onUploadStart.subscribe(() => {
      this.mode = 'initial';
    });

    // start downloading
    service.onBadgeDownloadStart.subscribe(() => {
      this.mode = 'downloading';
    });

    // show download progress
    service.onBadgeDownloadProgress.subscribe(percentage => {
      this.badgeDownloadProgressPercentage = percentage;
    });

    // show preview when ready
    service.onBadgeDownloadComplete.subscribe(badge => {
      this.mode = 'ready';
      this.badge = badge;
    });

  }

  ngOnInit() {
    this.action = this.route.parent.snapshot.data.action;
  }

}
