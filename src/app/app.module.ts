import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadingComponent } from './heading/heading.component';
import { CardComponent } from './card/card.component';
import { PriceTableComponent } from './price-table/price-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    CardComponent,
    PriceTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
