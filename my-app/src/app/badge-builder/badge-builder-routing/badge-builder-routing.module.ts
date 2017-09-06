import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WhyComponent } from '../why/why.component';
// import { ImageUploaderComponent } from './badge-builder/image-uploader/image-uploader.component';
// import { StoryInputComponent } from './badge-builder/story-input/story-input.component';
// import { SocialPreviewComponent } from './badge-builder/social-preview/social-preview.component';
// import { SocialActionsComponent } from './badge-builder/social-actions/social-actions.component';
// import { EmailCollectorComponent } from './badge-builder/email-collector/email-collector.component';
// import { BadgeBuilderCompleteComponent } from './badge-builder/badge-builder-complete/badge-builder-complete.component';

const badgeBuilderRoutes: Routes = [
  {
    path: 'badgebuilder',
    component: WhyComponent,
    // children: [
    //   {
    //     path: '',
    //     component: CrisisListComponent,
    //     children: [
    //       {
    //         path: ':id',
    //         component: CrisisDetailComponent
    //       },
    //       {
    //         path: '',
    //         component: CrisisCenterHomeComponent
    //       }
    //     ]
    //   }
    // ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(badgeBuilderRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BadgeBuilderRoutingModule { }
