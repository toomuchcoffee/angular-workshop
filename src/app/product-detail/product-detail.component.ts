import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../shared/product";
import {ProductDataService} from "../shared/product-data.service";

@Component({
  selector: 'idealo-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(private route: ActivatedRoute, private productDataService: ProductDataService) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => this.productDataService.getProduct(params.id)
        .subscribe(
          product => this.product = product,
            error => alert("product does not exist: " + params.id)));
  }

}
