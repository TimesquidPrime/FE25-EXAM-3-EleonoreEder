import { Component } from '@angular/core';
import { IProduct } from '../../../iProduct';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS } from '../../PRODUCTS';
import { CartService } from '../../cart';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute, private cartService: CartService) {
    let productId = Number(this.route.snapshot.params['id']);
    this.product = PRODUCTS.find((val) => val.id == productId);
  }

  addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product);
      alert('Product has been added to the cart');
    }
  }
}
