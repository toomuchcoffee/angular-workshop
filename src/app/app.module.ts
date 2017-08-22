import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductDescriptionBoxComponent} from './product-description-box/product-description-box.component';
import {ProductTitleComponent} from './product-title/product-title.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDataService} from "./shared/product-data.service";
import {HttpClientModule} from "@angular/common/http";
import {routing} from "./app.routing";
import {ProductDetailComponent} from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ProductDescriptionBoxComponent,
    ProductTitleComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule
  ],
  providers: [ProductDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
