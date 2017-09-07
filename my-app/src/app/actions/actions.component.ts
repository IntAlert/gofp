import { Component, OnInit } from '@angular/core';
import { ActionService } from '../action.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  actions: any;

  constructor(private actionService: ActionService) {}

  ngOnInit() {}

}
