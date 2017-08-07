import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MdButtonModule, MdCheckboxModule, MdCardModule, MdInputModule, MdToolbarModule, MdProgressBarModule } from '@angular/material';

import { AppComponent } from './app.component';
import 'hammerjs';
// import { SocialPreviewComponent } from './action-detail/social-preview/social-preview.component';
// import { SocialActionsComponent } from './action-detail/social-actions/social-actions.component';
// import { EmailCollectorComponent } from './action-detail/email-collector/email-collector.component';
// import { ImageUploaderComponent } from './action-detail/image-uploader/image-uploader.component';
// import { BadgeBuilderService } from './action-detail/badge-builder.service';
// import { CeiboShare } from 'ng2-social-share';
// import { ActionDetailComponent } from './action-detail/action-detail.component';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    // SocialPreviewComponent,
    // SocialActionsComponent,
    // EmailCollectorComponent,
    // ImageUploaderComponent,
    // CeiboShare,
    // ActionDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    // FormsModule,
    // ReactiveFormsModule,
    // Angular Material
    // MdCardModule,
    // MdButtonModule,
    // MdCheckboxModule,
    // MdInputModule,
    // MdToolbarModule,
    // MdProgressBarModule
  ],
  // providers: [BadgeBuilderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
