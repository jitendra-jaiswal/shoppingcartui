import { Component, OnInit } from '@angular/core';
import { product } from '../models/product';
import { CommonModule } from '@angular/common';
import { ProductdetailComponent } from '../productdetail/productdetail.component';
import { CartService } from '../../services/cart.service';
import { productresponse } from '../models/productsresponse';
import { response } from '../models/response';
import { addcartItem } from '../models/addcartItem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductdetailComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {


  products: product[] = [];
  // [
  //   {"productCode": "CH1", "name": "Chicken", "category": "Meat",  "unitPrice": 3.11, "description": "Tender Chicken", "quantity": 1},
  //   {"productCode": "AP1", "name": "Apple", "category": "Fruits", "isActive": true, "unitPrice": 6, "description": "Fresh Red Apples" , "quantity": 1},
  //   {"productCode": "CF1","name": "Coffee","category": "Others","isActive": true,"unitPrice": 11.22, "description": "Expresso, latte, Americano" , "quantity": 1},
  //   {"productCode": "MK1", "name": "Milk", "category": "Dairy", "isActive": true,"unitPrice": 4.75, "description": "Cow Milk", "quantity": 1 },
  //   { "productCode": "OM1", "name": "Oats", "category": "Grains", "isActive": true, "unitPrice": 3.65, "description": "A bag of healthy Oats", "quantity": 1  },
  //   { "productCode": "WM1", "name": "Watermelon", "category": "Fruits", "isActive": true, "unitPrice": 2.74, "description": "Juicy Watermelon", "quantity": 1 }
  // ];
  constructor(private cartService: CartService, private router: Router) {

  }

  ngOnInit(): void {
    console.log("oninit");
    this.fetchproducts();
  }

  fetchproducts(): void {
    this.cartService.getProducts().subscribe({
      next: (data) => {
        console.log(data);
        if (data.isSuccess === true) {
          this.products = data.products;
        }
        else {
          alert("Get Products failed. ErrorMessage: " + data.errorMessage);
        }
      },
      error: (e) => {
        console.error(e);
        alert("call to get products failed");
      }
    });
  }

  addToCart(product: product) {
    console.log("Selected Product: " + product.quantity);
    let cartitem: addcartItem = {
      productCode: product.productCode,
      quantity : product.quantity == undefined? 1: product.quantity
    };
    this.cartService.addToCart(cartitem).subscribe({
      next: (data) => {
        console.log(data);
        if (data.isSuccess === true) {
          // this.products = data.products; 
        }
        else {
          alert("Get Products failed. ErrorMessage: " + data.errorMessage);
        }
      },
      error: (e) => {
        console.error(e);
        alert("call to get products failed");
      }
    });
  }

  gotocart() {
    this.router.navigate(['/cart']);
    }

}
