import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recent-activity-block',
  templateUrl: './recent-activity-block.component.html',
  styleUrls: ['./recent-activity-block.component.css']
})
export class RecentActivityBlockComponent implements OnInit {

  @Input('badge') badge: any;
  @Input('ordinal') ordinal = 0;

  public parentClass: string;

  constructor() { }

  ngOnInit() {

    const parentClasses = [
      'class-1',
      'class-2',
      'class-3',
    ];
    this.parentClass = parentClasses[(this.ordinal) % parentClasses.length];
  }

}
