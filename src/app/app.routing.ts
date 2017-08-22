import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ProductEditComponent} from "./product-edit/product-edit.component";
import {ProductNewComponent} from "./product-new/product-new.component";

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  {
    path: 'products/new',
    component: ProductNewComponent
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent
  },
  {
    path: 'products/:id/edit',
    component: ProductEditComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
