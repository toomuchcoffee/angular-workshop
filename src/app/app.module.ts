import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductDescriptionBoxComponent } from './product-description-box/product-description-box.component';
import { ProductTitleComponent } from './product-title/product-title.component';
import { ProductListComponent } from './product-list/product-list.component';
import {ProductDataService} from "./shared/product-data.service";

@NgModule({
  declarations: [
    AppComponent,
    ProductDescriptionBoxComponent,
    ProductTitleComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
