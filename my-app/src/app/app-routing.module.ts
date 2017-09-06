import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component';

import { ActionsComponent } from './actions/actions.component';
import { RecentActivityComponent } from './recent-activity/recent-activity.component';
import { BadgeComponent } from './badge/badge.component';

// badge building
import { BadgeBuilderComponent } from './badge-builder/badge-builder.component';
import { WhyComponent } from './badge-builder/why/why.component';
import { ImageUploaderComponent } from './badge-builder/image-uploader/image-uploader.component';
import { StoryInputComponent } from './badge-builder/story-input/story-input.component';
import { SocialPreviewComponent } from './badge-builder/social-preview/social-preview.component';
import { SocialActionsComponent } from './badge-builder/social-actions/social-actions.component';
import { EmailCollectorComponent } from './badge-builder/email-collector/email-collector.component';
import { BadgeBuilderCompleteComponent } from './badge-builder/badge-builder-complete/badge-builder-complete.component';



@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '',  component: HomeComponent},
            { path: 'home',  component: HomeComponent},
            { path: 'recent-activity',  component: RecentActivityComponent},
            { path: 'badgeBuilder/:action_id', component: BadgeBuilderComponent },
            { path: 'actions',     component: ActionsComponent },
            { path: 'badge/:badge_id', component: BadgeComponent },

            // badge building
            { path: 'badgeBuilder/:action_id/why', component: WhyComponent },
            { path: 'badgeBuilder/:action_id/upload', component: ImageUploaderComponent },
            { path: 'badgeBuilder/:action_id/story', component: StoryInputComponent },
            { path: 'badgeBuilder/:action_id/preview', component: SocialPreviewComponent },
            { path: 'badgeBuilder/:action_id/share', component: SocialActionsComponent },
            { path: 'badgeBuilder/:action_id/prize', component: EmailCollectorComponent },
            { path: 'badgeBuilder/:action_id/complete', component: BadgeBuilderCompleteComponent },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}