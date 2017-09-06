import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ItemMoreComponent } from './item-more/item-more.component';
import { HomeComponent } from './home/home.component';
import { ItemService } from './item.service';
import { ItemResolver } from './item.resolver';

// Routing
import { AppRoutingModule } from './app.routing.module';
import { ItemOverviewComponent } from './item-overview/item-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemMoreComponent,
    HomeComponent,
    ItemOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ItemService,
    ItemResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
