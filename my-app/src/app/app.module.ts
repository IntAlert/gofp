import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MdButtonModule, MdCheckboxModule, MdCardModule} from '@angular/material';

import { AppComponent } from './app.component';
import 'hammerjs';
import { SocialPreviewComponent } from './social-preview/social-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialPreviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MdCardModule,
    MdButtonModule,
    MdCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
