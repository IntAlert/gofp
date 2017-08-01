import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdButtonModule, MdCheckboxModule, MdCardModule, MdInputModule, MdToolbarModule, MdProgressBarModule } from '@angular/material';

import { AppComponent } from './app.component';
import 'hammerjs';
import { SocialPreviewComponent } from './social-preview/social-preview.component';
import { SocialActionsComponent } from './social-actions/social-actions.component';
import { EmailCollectorComponent } from './email-collector/email-collector.component';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { BadgeBuilderService } from './badge-builder.service';
import { CeiboShare } from 'ng2-social-share';

@NgModule({
  declarations: [
    AppComponent,
    SocialPreviewComponent,
    SocialActionsComponent,
    EmailCollectorComponent,
    ImageUploaderComponent,
    CeiboShare
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // Angular Material
    MdCardModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdToolbarModule,
    MdProgressBarModule
  ],
  providers: [BadgeBuilderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
