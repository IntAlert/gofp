import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// imports
import { ActionsRoutingModule } from './actions-routing.module';
import { MdButtonModule, MdCheckboxModule, MdCardModule, MdInputModule, MdToolbarModule, MdProgressBarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// declarations
import { ActionsComponent } from './actions.component';

import { ActionDetailComponent } from './action-detail/action-detail.component';
import { SocialPreviewComponent } from './action-detail/social-preview/social-preview.component';
import { SocialActionsComponent } from './action-detail/social-actions/social-actions.component';
import { EmailCollectorComponent } from './action-detail/email-collector/email-collector.component';
import { ImageUploaderComponent } from './action-detail/image-uploader/image-uploader.component';
import { BadgeBuilderService } from './action-detail/badge-builder.service';
import { CeiboShare } from 'ng2-social-share';

@NgModule({

  imports: [
    CommonModule,
    ActionsRoutingModule,
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
  declarations: [
    ActionsComponent,
    ActionDetailComponent,


    SocialPreviewComponent,
    SocialActionsComponent,
    EmailCollectorComponent,
    ImageUploaderComponent,
    CeiboShare,
    
  ],
  providers: [BadgeBuilderService],
})
export class ActionsModule { }
