import { Component, OnInit } from '@angular/core';
import { BadgeBuilderService } from '../badge-builder.service';
import { SocialBadge } from '../social-badge';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-social-actions',
  templateUrl: './social-actions.component.html',
  styleUrls: ['./social-actions.component.css']
})
export class SocialActionsComponent implements OnInit {

  service: BadgeBuilderService;

  // social details
  public badge: SocialBadge;
  public tweetText: String = 'Some Tweet Text';
  action: any;


  constructor(
    private route: ActivatedRoute,
    service: BadgeBuilderService
  ) {

    // show loading until ready
    service.onUploadStart.subscribe(() => {
    });

    // show preview when ready
    service.onBadgeDownloadComplete.subscribe(badge => {
      this.badge = badge;
    });

    this.service = service;

  }

  ngOnInit() {
    this.action = this.route.parent.snapshot.data.action;
  }

  startFacebookShare = () => {
    this.service.registerShare();
  }

  startTwitterShare = () => {
    this.service.registerShare();
  }

}
