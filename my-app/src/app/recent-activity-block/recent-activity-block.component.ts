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

    const backgroundImages = [
      '/assets/lorempixel.jpg',
      '/assets/lorempixel.jpg',
      '/assets/lorempixel.jpg',
    ];
    
    this.parentClass = parentClasses[(this.ordinal) % parentClasses.length];
    this.backgroundImage = this.sanitizer.bypassSecurityTrustStyle("url(" + backgroundImages[(this.ordinal) % backgroundImages.length] + ")");
  }

}
