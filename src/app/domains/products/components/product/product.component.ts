import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
import { Product } from '@shared/models/product.model';

@Component({
  selector: 'app-product',
  imports: [CommonModule, RouterLinkWithHref, NgOptimizedImage],
  styleUrls: ['./product.component.css'],
  templateUrl: './product.component.html',
})
export class ProductComponent {
  @Input({ required: true }) product!: Product;

  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    this.addToCart.emit(this.product);
  }
}
