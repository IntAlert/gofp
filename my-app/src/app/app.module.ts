import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
  MdCardModule,
  MdInputModule,
  MdToolbarModule,
  MdProgressBarModule,
  MdListModule,
  MdTabsModule
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
    MdCardModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdToolbarModule,
    MdProgressBarModule,
    MdListModule,
    MdTabsModule

  ],
  bootstrap: [AppComponent],
  providers: [
    ActionService,
    BadgeBuilderService,
    BadgeService
  ]
})
export class AppModule { }
