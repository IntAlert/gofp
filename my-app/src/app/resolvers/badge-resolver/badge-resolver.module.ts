import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { BadgeService } from '../../badge.service';

@Injectable()
export class BadgeResolverModule implements Resolve<any> {
  constructor(
		private badgeService: BadgeService,
		private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Promise<any> {
		return this.badgeService.getBadgeById(route.params.badge_id)
			.then(badge => {
				console.log(badge);
				return badge;
			})
			.catch(result => {
				console.log("badge not found");
				this.router.navigate(['/']);
				return null;
			});

  }
}
