import { Component, OnInit } from '@angular/core';
import { ActionService } from '../action.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  actions: any;

  constructor(
    private actionService: ActionService,
    private router: Router
  ) {}

  ngOnInit() {
    // scroll to top, on nvaigate
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        document.body.scrollTop = 0;
    });
  }
  

}
