import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component';

import { ActionsComponent } from './actions/actions.component';
import { RecentActivityComponent } from './recent-activity/recent-activity.component';


// Badge Landing Page
import { BadgeComponent } from './badge/badge.component';
import { BadgeResolverModule } from './resolvers/badge-resolver/badge-resolver.module';

// badge building
import { ActionResolverModule } from './resolvers/action-resolver/action-resolver.module';
import { BadgeBuilderComponent } from './badge-builder/badge-builder.component';
import { WhyComponent } from './badge-builder/why/why.component';
import { ImageUploaderComponent } from './badge-builder/image-uploader/image-uploader.component';
import { StoryInputComponent } from './badge-builder/story-input/story-input.component';
import { SocialPreviewComponent } from './badge-builder/social-preview/social-preview.component';
import { SocialActionsComponent } from './badge-builder/social-actions/social-actions.component';
import { EmailCollectorComponent } from './badge-builder/email-collector/email-collector.component';
import { BadgeBuilderCompleteComponent } from './badge-builder/badge-builder-complete/badge-builder-complete.component';

import { CompetitionTermsComponent } from './competition-terms/competition-terms.component';
import { TabletComponent } from './tablet/tablet.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '',  component: HomeComponent},
            { path: 'home',  component: HomeComponent},
            { path: 'recent-activity',  component: RecentActivityComponent},
            { path: 'badgeBuilder/:action_id', component: BadgeBuilderComponent },
            { path: 'actions',     component: ActionsComponent },
            { path: 'terms',     component: CompetitionTermsComponent },
            { path: 'tablet',     component: TabletComponent },


            // badge landing page
            {
                path: 'my/action/:badge_id',
                component: BadgeComponent,
                resolve: {
                    badge: BadgeResolverModule
                },
            },

            // badge building
            { path: 'badgeBuilder/:action_id',  component: BadgeBuilderComponent,
                resolve: {
                    action: ActionResolverModule
                },
                children: [
                    { path: '', redirectTo: 'why', pathMatch: 'full' },
                    { path: 'why', component: WhyComponent },
                    { path: 'upload', component: ImageUploaderComponent },
                    { path: 'story', component: StoryInputComponent },
                    { path: 'preview', component: SocialPreviewComponent },
                    { path: 'share', component: SocialActionsComponent },
                    { path: 'prize', component: EmailCollectorComponent },
                    { path: 'complete', component: BadgeBuilderCompleteComponent },
                ]
            },
            { path: '**', component: NotFoundComponent }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}