import { Component } from '@angular/core';
import { BadgeBuilderService } from './badge-builder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(service: BadgeBuilderService) {}

}
