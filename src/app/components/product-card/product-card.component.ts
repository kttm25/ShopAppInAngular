import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product: Product | undefined;

  @Output() showProductDetails : EventEmitter<boolean> = new EventEmitter<boolean>()
  @Output() deleteProductItem : EventEmitter<Product> = new EventEmitter<Product>()
  @Output() getProductItem : EventEmitter<Product> = new EventEmitter<Product>()

  handleClick(product: Product | undefined){
    //this.deleteProductItem.emit(product)
    this.showProductDetails.emit(true);
    this.getProductItem.emit(product)
  }
}
