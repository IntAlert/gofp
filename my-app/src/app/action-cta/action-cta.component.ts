import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-action-cta',
  templateUrl: './action-cta.component.html',
  styleUrls: ['./action-cta.component.css']
})
export class ActionCtaComponent implements OnInit {

  @Input('action') action: object;

  constructor() { }

  ngOnInit() {
    console.log(this.action)
  }

}
