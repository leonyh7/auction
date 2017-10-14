import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  private products: Product[] = [
    new Product('1', 'product1', 1.99, 3.5, '第一个商品', ['电子产品', '硬件设备']),
    new Product('2', 'product2', 1.99, 2.5, '第一个商品', ['图书']),
    new Product('3', 'product3', 1.99, 1.5, '第一个商品', ['硬件设备']),
    new Product('4', 'product4', 1.99, 4.5, '第一个商品', ['电子产品', '硬件设备']),
    new Product('5', 'product5', 1.99, 4, '第一个商品', ['电子产品']),
    new Product('6', 'product6', 1.99, 3, '第一个商品', ['图书'])
  ];
  private comments = [
    new Comment('1', '1', '2017-10-01', '张三', 3, 'good'),
    new Comment('2', '1', '2017-10-02', 'tom', 3, 'good'),
    new Comment('3', '1', '2017-10-03', 'sss', 2, 'good'),
    new Comment('4', '2', '2017-10-04', 'sddd', 3, 'good'),
  ];

  constructor() { }

  getAllCategorie() {
    return ['电子产品', '硬件设备', '图书'];
  }

  getProducts() {
    return this.products;
  }

  getProduct(id: string) {
    return this.products.find((product) => product.id === id);
  }

  getCommentsByProductId(id: string): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId === id);
  }

}

export class Product {
  constructor(
    public id: string,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) { }
}

export class Comment {
  constructor(
    public id: string,
    public productId: string,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string
  ) { }
}
