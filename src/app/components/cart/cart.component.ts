import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { cartItem, cartmodel } from '../models/cartmodel';
import { Router } from '@angular/router';
import { CurrencyPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor,CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {

  cart: cartmodel = new cartmodel;
  cartitems: cartItem[] = [];
  constructor(private cartService: CartService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    console.log("oninit");
    this.fetchcart();
  }

  fetchcart(): void {
    this.cartService.getCart().subscribe({
      next: (data) => {
        console.log(data);
        if (data.isSuccess === true) {
          this.cartitems = data.cartItems;
          this.cart = data;
        }
        else {
          alert("Get Cart failed. ErrorMessage: " + data.errorMessage);
        }
      },
      error: (e) => {
        console.error(e);
        alert("call to get cart failed");
      }
    });
  }

  gotoproducts() {
    this.router.navigate(['/product']);
    }

    remove(item: cartItem) {
      this.cartService.removeCart(item.productCode).subscribe({
        next: (data) => {
          console.log(data);
          if (data.isSuccess === true) {
            this.fetchcart();
          }
          else {
            alert("Delete Cart Item failed. ErrorMessage: " + data.errorMessage);
          }
        },
        error: (e) => {
          console.error(e);
          alert("Delete cart item failed");
        }
      });
      }
  
}
