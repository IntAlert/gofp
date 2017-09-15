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
  public tweetText: String = 'Here\'s my #everydaypeace! We can spread a little peace together with @intalert & @benandjerrysUK. Join me';
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
    this.GA.emitEvent("badge-share", "facebook", this.action.title, this.action.id);
  }

  startTwitterShare = () => {
    this.service.registerShare();
    this.GA.emitEvent("badge-share", "twitter", this.action.title, this.action.id);
  }

  startWhatsappShare = () => {
    this.service.registerShare();
    this.GA.emitEvent("badge-share", "whatsapp", this.action.title, this.action.id);
  }

  startLinkedInShare = () => {
    this.service.registerShare();
    this.GA.emitEvent("badge-share", "whatsapp", this.action.title, this.action.id);
  }

}
