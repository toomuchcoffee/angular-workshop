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
import {ProductEditComponent} from './product-edit/product-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductNewComponent} from './product-new/product-new.component';
import {ConfirmCandeactivateGuard} from "./shared/confirm-candeactivate.guard";
import { PrettyCurrencyPipe } from './shared/pretty-currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductDescriptionBoxComponent,
    ProductTitleComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductNewComponent,
    PrettyCurrencyPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductDataService, ConfirmCandeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
