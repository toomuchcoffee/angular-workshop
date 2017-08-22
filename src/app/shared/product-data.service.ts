import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Product} from "./product";
import "rxjs/add/observable/of";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class ProductDataService {

  constructor(private http: Http) {
  }

  public getProducts(): Observable<Product[]> {
    return this.http
      .get('http://localhost:4730/products')
      .map(response => response.json());
  }

  //   [
  //     {
  //       id: 1,
  //       title: "Samsung - Fernseher",
  //       description: "Ein toller Fernseher",
  //       price: 3399,
  //       image: "http://via.placeholder.com/350x350"
  //     },
  //     {
  //       id: 2,
  //       title: "Apple - iphone",
  //       description: "Wenn du kein iphone hast, dann hast du kein iphone",
  //       price: 1299,
  //       image: "http://via.placeholder.com/350x350"
  //     },
  //     {
  //       id: 3,
  //       title: "Klobürste",
  //       description: "Dieses Wundergerät wird ihnen als Multifunktionswerkzeug dienste leisten",
  //       price: 99,
  //       image: "http://via.placeholder.com/350x350"
  //     }
  //   ]
  // );


}
