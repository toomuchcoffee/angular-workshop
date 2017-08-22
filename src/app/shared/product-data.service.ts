import {Injectable} from '@angular/core';
import {Product} from "./product";
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import "rxjs/add/observable/of";
import {HttpClient} from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable()
export class ProductDataService {

  constructor(private http: HttpClient) {
  }

  public getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>('http://localhost:4730/products')
  }

  public getProduct(id): Observable<Product> {
    return this.http
      .get<Product>('http://localhost:4730/products/'+id)
  }

  public addProduct(product: Product): Observable<Product> {
    return this.http.post('http://localhost:4730/products', product);
  }

}
