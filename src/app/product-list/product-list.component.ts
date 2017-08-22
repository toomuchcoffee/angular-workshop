import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../shared/product";
import {ProductDataService} from "../shared/product-data.service";

@Component({
  selector: 'idealo-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private productDataService: ProductDataService) { }

  ngOnInit() {
    this.productDataService.getProducts().subscribe(products => this.products = products);
  }

}
