import { Component, EventEmitter, Input, Output } from '@angular/core';
import { product } from '../models/product';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-productdetail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './productdetail.component.html',
  styleUrl: './productdetail.component.scss'
})
export class ProductdetailComponent {

  @Input() productitem!: product;
  @Output() onClick = new EventEmitter<any>();

  constructor() { }

  onClickButton(event: any) {
    this.onClick.emit(event);
  }

  OnSelectChange(productItem: product, quantity: any) {
    // console.log(quantity.value);
    productItem.quantity = quantity.value;
    }
}
