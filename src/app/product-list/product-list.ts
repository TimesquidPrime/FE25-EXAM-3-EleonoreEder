import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IProduct } from '../../iProduct';
import { PRODUCTS } from '../PRODUCTS';
import { CartService } from '../cart';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products: IProduct[] = PRODUCTS;

  constructor(private cartService: CartService) {}

  addToCart(product: IProduct) {
    this.cartService.addToCart(product);
    alert('This product has been added to your cart');
  }
}
