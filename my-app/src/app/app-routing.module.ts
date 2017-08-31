import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BadgeBuilderComponent } from './badge-builder/badge-builder.component';
import { ActionsComponent } from './actions/actions.component';
import { RecentActivityComponent } from './recent-activity/recent-activity.component';
import { BadgeComponent } from './badge/badge.component';


@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '',  component: HomeComponent},
            { path: 'home',  component: HomeComponent},
            { path: 'recent-activity',  component: RecentActivityComponent},
            { path: 'badgeBuilder/:action_id', component: BadgeBuilderComponent },
            { path: 'actions',     component: ActionsComponent },
            { path: 'badge/:badge_id', component: BadgeComponent },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}