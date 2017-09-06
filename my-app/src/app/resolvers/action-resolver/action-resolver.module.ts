import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { ActionService } from '../../action.service';

@Injectable()
export class ActionResolverModule implements Resolve<any> {
  constructor(
		private actionService: ActionService,
		private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Promise<any> {
		return this.actionService.getActionById(route.params.action_id)
			.then(action => {
				console.log(action);
				return action;
			})
			.catch(result => {
				console.log("action not found");
				this.router.navigate(['/']);
				return null;
			});

  }
}
