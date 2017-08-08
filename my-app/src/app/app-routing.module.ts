import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BadgeBuilderComponent } from './badge-builder/badge-builder.component';
import { ActionsComponent } from './actions/actions.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '',  component: HomeComponent},
            { path: 'home',  component: HomeComponent},
            { path: 'badgeBuilder/:action_id', component: BadgeBuilderComponent },
            { path: 'actions',     component: ActionsComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}