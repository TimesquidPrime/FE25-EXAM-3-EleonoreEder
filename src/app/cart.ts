import { Injectable } from '@angular/core';
import { IProduct } from '../iProduct';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: IProduct[] = [];

  addToCart(product: IProduct) {
    let itemExists = this.cart.find((val) => val.id == product.id);

    if (itemExists) {
      itemExists.quantity++;
    } else {
      this.cart.push({ ...product });
    }
  }

  getCart() {
    return this.cart;
  }

  calculateSubTotal() {
    let subtotal = 0;
    for (let val of this.cart) {
      subtotal = subtotal + val.price * val.quantity;
    }

    return subtotal;
  }

  // calculateServiceFee() {
  //   let serviceFee = 0;
  //   serviceFee = this.calculateSubTotal() * 0.15;
  // }

  constructor() {}
}
