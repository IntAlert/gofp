import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-recent-activity-block',
  templateUrl: './recent-activity-block.component.html',
  styleUrls: ['./recent-activity-block.component.css']
})
export class RecentActivityBlockComponent implements OnInit {

  @Input('badge') badge: any;
  @Input('ordinal') ordinal = 0;

  public parentClass: string;
  public backgroundImage: SafeUrl;
  
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {

    const parentClasses = [
      'class-1',
      'class-2',
      'class-3',
      'class-4',
    ];

    const backgroundImageFilenames = {
      1: '1.png',
      2: '2.png',
      3: '3.png',
      4: '4.png',
      5: '5.png',
    };
    
    // determine bg class, tied to ordinal
    this.parentClass = parentClasses[(this.ordinal) % parentClasses.length];

    // determine action bg image, tied to action id
    let badgeFilename = this.badge.Action.image;

    // show uploaded version if it exists
    if (this.badge.Upload && this.badge.Upload.url) {
      badgeFilename = this.badge.Upload.url;
    }
    this.backgroundImage = this.sanitizer.bypassSecurityTrustStyle("url(" + badgeFilename + ")");
  }

}
