import { Component, OnInit } from '@angular/core';
import { BadgeBuilderService } from '../badge-builder.service';

@Component({
  selector: 'app-social-actions',
  templateUrl: './social-actions.component.html',
  styleUrls: ['./social-actions.component.css']
})
export class SocialActionsComponent implements OnInit {

  ready: Boolean = false
  loading: Boolean = false

  service: BadgeBuilderService

  constructor(service: BadgeBuilderService) {

    // show loading until ready
    service.onUploadStart.subscribe(stage => {
      this.ready = false
      this.loading = true
    });

    // show preview when ready
    service.onPreviewReady.subscribe(stage => {
      this.ready = true
      this.loading = false
    });

    this.service = service

  }

  startFacebookShare = () => {
    this.service.registerShare()
  }

  startTwitterShare = () => {
    this.service.registerShare()
  }


  ngOnInit() {
  }

}
