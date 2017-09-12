import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {

  badge: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // set current action
    this.badge = this.route.snapshot.data.badge;
  }

}
