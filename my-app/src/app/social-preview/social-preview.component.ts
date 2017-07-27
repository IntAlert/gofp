import { Component, OnInit } from '@angular/core';
import { BadgeBuilderService } from '../badge-builder.service';

@Component({
  selector: 'app-social-preview',
  templateUrl: './social-preview.component.html',
  styleUrls: ['./social-preview.component.css']
})
export class SocialPreviewComponent implements OnInit {

  ready: Boolean = false
  loading: Boolean = false

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

  }

  ngOnInit() {
  }

}
