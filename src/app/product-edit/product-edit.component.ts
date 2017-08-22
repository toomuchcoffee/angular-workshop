import { Component, OnInit } from '@angular/core';
import {Product} from "../shared/product";
import {ProductDataService} from "../shared/product-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'idealo-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;

  constructor(private route: ActivatedRoute, private productDataService: ProductDataService) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => this.productDataService.getProduct(params.id)
        .subscribe(
          product => this.product = product,
          error => alert("product does not exist: " + params.id)));
  }

  save(value) {
    console.log(value);
  }
}
