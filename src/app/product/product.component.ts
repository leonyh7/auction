import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;

  private imgUrl = 'http://placehold.it/320x150';

  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, 'product1', 1.99, 3.5, '第一个商品', ['电子产品', '硬件设备']),
      new Product(1, 'product2', 1.99, 2.5, '第一个商品', ['电子产品', '硬件设备']),
      new Product(1, 'product3', 1.99, 1.5, '第一个商品', ['电子产品', '硬件设备']),
      new Product(1, 'product4', 1.99, 4.5, '第一个商品', ['电子产品', '硬件设备']),
      new Product(1, 'product5', 1.99, 4, '第一个商品', ['电子产品', '硬件设备']),
      new Product(1, 'product6', 1.99, 3, '第一个商品', ['电子产品', '硬件设备'])
    ];
}

}


export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {

  }
}
