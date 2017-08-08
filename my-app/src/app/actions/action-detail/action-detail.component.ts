import { Component, OnInit } from '@angular/core';
// import { BadgeBuilderService } from './badge-builder.service';
import { ActionService } from '../../action.service';

@Component({
  selector: 'app-action-detail',
  templateUrl: './action-detail.component.html',
  styleUrls: ['./action-detail.component.css']
})
export class ActionDetailComponent implements OnInit {

  constructor(private actionService: ActionService) {
    console.log('constructor') 
  }



  ngOnInit() {
    this.actionService.loadActions()
    console.log('ngOnInit')
  }

}
