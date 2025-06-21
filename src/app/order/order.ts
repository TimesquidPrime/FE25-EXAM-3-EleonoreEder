import { Component } from '@angular/core';
import { IProduct } from '../../iProduct';
import { CartService } from '../cart';

@Component({
  selector: 'app-order',
  imports: [],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order {
  cart: IProduct[] = [];

  subtotal: number = 0;
  serviceFee: number = 0;
  discount: number = 0;
  total: number = 0;

  constructor(private cartService: CartService) {
    this.cart = this.cartService.getCart();
    this.subtotal = this.cartService.calculateSubTotal();
    this.calculateServiceFee();
    this.calculateDiscount();
    this.calculateTotal();
  }

  private round(value: number): number {
    return Math.round(100 * value) / 100;
  }

  calculateServiceFee() {
    this.serviceFee = this.round(this.subtotal * 0.1);
  }

  calculateDiscount() {
    const discountAmount = this.subtotal > 40 ? this.subtotal * 0.15 : 0;
    this.discount = this.round(discountAmount);
  }

  calculateTotal() {
    this.total = this.round(this.subtotal + this.serviceFee - this.discount);
  }
}
