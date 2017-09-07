import { Component, OnInit } from '@angular/core';
import { BadgeBuilderService } from '../badge-builder.service';
// import { SocialBadge } from '../social-badge';
import { ActivatedRoute, Router } from '@angular/router';


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

  constructor(
    private route: ActivatedRoute,
    private service: BadgeBuilderService
  ) {

    // // show loading until ready
    // service.onUploadStart.subscribe(() => {
    // });


    // // show preview when ready
    // service.onBadgeDownloadComplete.subscribe(badge => {
    //   console.log(badge);
    //   this.badge = badge;
    // });

  }

  ngOnInit() {

    // get current action
    this.action = this.route.parent.snapshot.data.action;

    // get current badge
    this.actionUserData = this.service.getCurrentActionUserData();
  }

  startFacebookShare = () => {
    this.service.registerShare();
  }

  startTwitterShare = () => {
    this.service.registerShare();
  }

}
