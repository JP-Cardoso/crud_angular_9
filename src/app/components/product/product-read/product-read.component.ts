import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products!: Product[];
  displayedColumns? = ['id', 'name', 'price', 'action']
BRL: string|undefined;

  constructor(
    private productService: ProductService
  ) {

  }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct() {
    this.productService.read().subscribe((products) => {
      this.products = products;
      console.log(products);
      
    })
  }

}
