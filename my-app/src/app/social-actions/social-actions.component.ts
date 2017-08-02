import { Component, OnInit } from '@angular/core';
import { BadgeBuilderService } from '../badge-builder.service';
import { SocialBadge } from '../social-badge';


@Component({
  selector: 'app-social-actions',
  templateUrl: './social-actions.component.html',
  styleUrls: ['./social-actions.component.css']
})
export class SocialActionsComponent {

  service: BadgeBuilderService;

  // UI state
  mode = 'initial'; // [initial | ready ]

  // social details
  public badge: SocialBadge;
  public tweetText: String = 'Some Tweet Text';


  constructor(service: BadgeBuilderService) {

    // show loading until ready
    service.onUploadStart.subscribe(() => {
      this.mode = 'initial';
    });

    // show preview when ready
    service.onBadgeDownloadComplete.subscribe(badge => {
      this.mode = 'ready';
      this.badge = badge;
    });

    this.service = service;

  }

  startFacebookShare = () => {
    this.service.registerShare();
  }

  startTwitterShare = () => {
    this.service.registerShare();
  }

}
