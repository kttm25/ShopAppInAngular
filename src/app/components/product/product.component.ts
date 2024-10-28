import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product: Product | undefined;

  @Output() deleteProductItem : EventEmitter<Product> = new EventEmitter<Product>()

  handleClick(product: Product | undefined){
    this.deleteProductItem.emit(product)
  }
}