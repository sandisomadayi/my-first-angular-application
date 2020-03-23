import { Component, OnInit } from '@angular/core';

import {FormBuilder} from '@angular/forms';

import {CartService} from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  product

  removingFromCart(product) {
    this.cartService.removeFromCart(product);
    window.alert('Your product has been removed from cart!');
  }

  cleanCart() {
    this.cartService.clearCart();
    window.alert("All items cleared");
  }

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    })
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }
}