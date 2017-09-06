import { Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ActionService } from '../../action.service';
import { BadgeBuilderService } from '../badge-builder.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-why',
  templateUrl: './why.component.html',
  styleUrls: ['./why.component.css']
})
export class WhyComponent implements OnInit {

  service: BadgeBuilderService;
  mode: String = 'initial'; // [initial || complete]
  action: any;

  constructor(
    route: ActivatedRoute,
    private actionService: ActionService,
    private badgeBuilderService: BadgeBuilderService
  ) {
    const action_id: Observable<number> = route.params.map(p => p.action_id);

    action_id.subscribe((value) => {

      // select action in badge builder service
      this.actionService.getAction(value).then(action => {
          this.badgeBuilderService.setCurrentAction(action);
          this.action = action;
      }).catch(() => {
        console.log("action not found");
      });

    });

  }

  ngOnInit() {}

  registerStart() {
    this.mode = 'complete';
    this.service.registerStart();
  }

}
