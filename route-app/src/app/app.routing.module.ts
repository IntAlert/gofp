import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ItemComponent} from './item/item.component';
import {ItemOverviewComponent} from './item-overview/item-overview.component';
import {ItemMoreComponent} from './item-more/item-more.component';
import {ItemResolver} from './item.resolver';

const routes: Routes = [];

@NgModule({
  imports: [
        RouterModule.forRoot([
            { path: '',  component: HomeComponent},
						{ path: 'item/:id',  component: ItemComponent,
							resolve: {
								item: ItemResolver
							},
							children: [
									{ path: '', redirectTo: 'overview', pathMatch: 'full' },
									{ path: 'overview', component: ItemOverviewComponent },
									{ path: 'more', component: ItemMoreComponent }
							]
						},

        ])
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
