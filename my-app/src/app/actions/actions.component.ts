import { Component } from '@angular/core';
import { ActionService } from '../action.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent {

  actions: any;

  constructor(
    private actionService: ActionService,
    private router: Router
  ) {}

}
