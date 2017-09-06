import { Component, OnInit } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';

import { ActionService } from '../../action.service';

@Component({
  selector: 'app-action-detail-resolver',
  templateUrl: './action-detail-resolver.component.html',
  styleUrls: ['./action-detail-resolver.component.css']
})
export class ActionDetailResolverComponent implements Resolve<any> {

  constructor(private actionService: ActionService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<any> {

    const action_id = route.paramMap.get('action_id');

    return this.actionService.loadActionById(action_id)
      .then(action => {
        if (action) {
          return action;
        }
      });

    // let id = route.paramMap.get('id');
 
    // return this.cs.getCrisis(id).then(crisis => {
    //   if (crisis) {
    //     return crisis;
    //   } else { // id not found
    //     this.router.navigate(['/crisis-center']);
    //     return null;
    //   }
    // });
  }

}
