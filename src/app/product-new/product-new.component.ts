import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ProductDataService} from "../shared/product-data.service";

@Component({
  selector: 'idealo-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private productDataService: ProductDataService, private router: Router) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        title: [
          '',
          Validators.required
        ],
        id: [
          '',
          Validators.required
        ],
        price: []
      });
  }

  onSubmit(value) {
    console.log(value);
    this.productDataService.addProduct(value).subscribe(
      v => this.router.navigate(['/products'])
    );
  }

}
