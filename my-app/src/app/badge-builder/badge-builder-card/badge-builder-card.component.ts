import { Component, Input, Output, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-badge-builder-card',
  templateUrl: './badge-builder-card.component.html',
  styleUrls: ['./badge-builder-card.component.css']
})
export class BadgeBuilderCardComponent implements OnInit{

  @Input() headerText = 'Share it with us';

  containerClass = '';

  constructor(private router: Router){}

  ngOnInit() {
    if (this.router.url.indexOf('prize') > -1) {
      this.containerClass = 'prize';
    }
    console.log(this.router.url);
  }


}
