import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductDescriptionBoxComponent } from './product-description-box/product-description-box.component';
import { ProductTitleComponent } from './product-title/product-title.component';
import { ProductListComponent } from './product-list/product-list.component';
import {ProductDataService} from "./shared/product-data.service";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    ProductDescriptionBoxComponent,
    ProductTitleComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [ProductDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
