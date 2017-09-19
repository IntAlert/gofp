import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleAnalyticsEventsService } from './google-analytics-events.service';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import 'hammerjs';

// Routing
import { AppRoutingModule } from './app-routing.module';

// imports
import {
  MdButtonModule,
  MdCheckboxModule,
  MdInputModule,
  MdProgressBarModule,
} from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { HomeComponent } from './home/home.component';
import { BadgeBuilderComponent } from './badge-builder/badge-builder.component';
import { ActionsComponent } from './actions/actions.component';

// Services
import { ActionService } from './action.service';
import { BadgeBuilderService } from './badge-builder/badge-builder.service';
import { BadgeService } from './badge.service';

// Directives
import { CeiboShare } from 'ng2-social-share';
import { SocialPreviewComponent } from './badge-builder/social-preview/social-preview.component';
import { SocialActionsComponent } from './badge-builder/social-actions/social-actions.component';
import { EmailCollectorComponent } from './badge-builder/email-collector/email-collector.component';
import { ImageUploaderComponent } from './badge-builder/image-uploader/image-uploader.component';
import { RecentActivityComponent } from './recent-activity/recent-activity.component';
import { BadgeComponent } from './badge/badge.component';
import { RecentActivityBlockComponent } from './recent-activity-block/recent-activity-block.component';
import { FooterPeaceBuildingComponent } from './footer-peace-building/footer-peace-building.component';
import { FooterCommonComponent } from './footer-common/footer-common.component';
import { CompetitionBannerComponent } from './competition-banner/competition-banner.component';
import { ActionCtaComponent } from './action-cta/action-cta.component';
import { WhyComponent } from './badge-builder/why/why.component';
import { StoryInputComponent } from './badge-builder/story-input/story-input.component';
import { BadgeBuilderCardComponent } from './badge-builder/badge-builder-card/badge-builder-card.component';
import { BadgeBuilderCompleteComponent } from './badge-builder/badge-builder-complete/badge-builder-complete.component';


// Resolvers
import { ActionResolverModule } from './resolvers/action-resolver/action-resolver.module';
import { BadgeResolverModule } from './resolvers/badge-resolver/badge-resolver.module';

// Third Party
import { MomentModule } from 'angular2-moment';
import { ButtonComponent } from './button/button.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CompetitionTermsComponent } from './competition-terms/competition-terms.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActionsComponent,
    BadgeBuilderComponent,

    // Directives
    SocialPreviewComponent,
    SocialActionsComponent,
    EmailCollectorComponent,
    ImageUploaderComponent,
    CeiboShare,
    RecentActivityComponent,
    BadgeComponent,
    RecentActivityBlockComponent,
    FooterPeaceBuildingComponent,
    FooterCommonComponent,
    CompetitionBannerComponent,
    ActionCtaComponent,
    WhyComponent,
    StoryInputComponent,
    BadgeBuilderCardComponent,
    BadgeBuilderCompleteComponent,
    ButtonComponent,
    NotFoundComponent,
    CompetitionTermsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,

    // Forms
    FormsModule,
    ReactiveFormsModule,

    // Angular Material
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdProgressBarModule,

    // Third Party
    MomentModule,
    Ng2PageScrollModule,

  ],
  bootstrap: [AppComponent],
  providers: [
    ActionService,
    BadgeBuilderService,
    BadgeService,
    ActionResolverModule,
    BadgeResolverModule,
    GoogleAnalyticsEventsService
  ]
})
export class AppModule { }
