import { Component, OnInit, OnDestroy  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionService } from '../action.service';
import { BadgeBuilderService } from './badge-builder.service';

@Component({
  selector: 'app-badge-builder',
  templateUrl: './badge-builder.component.html',
  styleUrls: ['./badge-builder.component.css']
})
export class BadgeBuilderComponent implements OnInit, OnDestroy {

  action: any;
  private routeSub: any;

  constructor(private route: ActivatedRoute, private actionService: ActionService, private badgeBuilderService: BadgeBuilderService) { }

  ngOnInit() {

    // wait for param and then wait for onActionsLoaded
    this.routeSub = this.route.params.subscribe(params => {
      if (this.actionService.actionsLoaded) {
        this.getAction(params['action_id'])
      } else {
        this.actionService.onActionsLoaded.subscribe(() => {
          this.getAction(params['action_id'])
        })
      }
      
    });
  }

  getAction(action_id) {
    this.actionService.getAction(action_id).then(action => {
      this.action = action
    }).catch(() => {
      console.log("action not found")
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
