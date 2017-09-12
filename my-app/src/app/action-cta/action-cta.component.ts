import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-action-cta',
  templateUrl: './action-cta.component.html',
  styleUrls: ['./action-cta.component.css']
})
export class ActionCtaComponent implements OnInit {

  @Input('action') action: object;
  @Input('ordinal') ordinal = 0;

  public parentClass: string;

  constructor() { }

  ngOnInit() {
    const parentClasses = [
      'class-1',
      'class-2',
      'class-3',
      'class-4',
    ];
    this.parentClass = parentClasses[(this.ordinal) % parentClasses.length];
  }

}
