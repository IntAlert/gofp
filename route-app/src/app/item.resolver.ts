import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { ItemService } from './item.service';

@Injectable()
export class ItemResolver implements Resolve<any> {
  constructor(
		private itemService: ItemService,
		private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Promise<any> {
		return this.itemService.getById(route.params.id)
			.then(item => item)
			.catch(result => {
				this.router.navigate(['/']);
				return null;
			});

  }
}
