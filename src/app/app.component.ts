import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, ProductListComponent, 
    CartComponent, NgFor, CommonModule, 
    FormsModule, ProductdetailComponent,
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shoppingcart';
}
