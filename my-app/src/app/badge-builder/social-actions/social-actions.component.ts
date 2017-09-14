import { Component, OnInit } from '@angular/core';
import { BadgeBuilderService } from '../badge-builder.service';
// import { SocialBadge } from '../social-badge';
import { ActivatedRoute, Router } from '@angular/router';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {GoogleAnalyticsEventsService} from "../../google-analytics-events.service";


@Component({
  selector: 'app-social-actions',
  templateUrl: './social-actions.component.html',
  styleUrls: ['./social-actions.component.css']
})
export class SocialActionsComponent implements OnInit {

  // social details
  actionUserData: any;
  public tweetText: String = 'Some Tweet Text';
  action: any;
  sanitizedWhatsappUrl: SafeUrl;

  constructor(
    private route: ActivatedRoute,
    private service: BadgeBuilderService,
    private sanitizer: DomSanitizer,
    private GA: GoogleAnalyticsEventsService
  ) {}

  ngOnInit() {

    // get current action
    this.action = this.route.parent.snapshot.data.action;

    // get current badge
    this.actionUserData = this.service.getCurrentActionUserData();

    // set whatsapp URL
    this.sanitizedWhatsappUrl = this.sanitizer.bypassSecurityTrustUrl('whatsapp://send?text=' + this.actionUserData.badge.opengraph);

  }

  startFacebookShare = () => {
    this.service.registerShare();
    this.GA.emitEvent("badge", "share", "facebook");
  }

  startTwitterShare = () => {
    this.service.registerShare();
    this.GA.emitEvent("badge", "share", "twitter");
  }

  startWhatsappShare = () => {
    this.service.registerShare();
    this.GA.emitEvent("badge", "share", "whatsapp");
  }

  startLinkedInShare = () => {
    this.service.registerShare();
    this.GA.emitEvent("badge", "share", "whatsapp");
  }

}
