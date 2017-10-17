import { Observable } from 'rxjs/Observable';
import { FormControl } from '@angular/forms';
import { Product, ProductService } from './../service/product.service';
import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Observable<Product[]>;

  // private keyword: string;

  // private titleFilter: FormControl = new FormControl();

  private imgUrl = 'http://placehold.it/320x150';

  constructor(
    private productService: ProductService
  ) {
    // this.titleFilter.valueChanges.debounceTime(500)
    //   .subscribe(value => this.keyword = value);
  }

  ngOnInit() {
    this.products = this.productService.getProducts();

    // this.productService.searchEvent.subscribe(params => this.products = this.productService.search(params));
    this.productService.searchTerms.subscribe(params => this.products = this.productService.search(params));

  }

}
