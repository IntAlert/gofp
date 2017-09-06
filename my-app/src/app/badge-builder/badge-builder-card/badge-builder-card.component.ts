import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-badge-builder-card',
  templateUrl: './badge-builder-card.component.html',
  styleUrls: ['./badge-builder-card.component.css']
})
export class BadgeBuilderCardComponent {

  @Input() headerText = 'Share it with us';

}
