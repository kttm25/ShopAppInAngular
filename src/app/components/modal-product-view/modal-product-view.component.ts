import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-modal-product-view',
  templateUrl: './modal-product-view.component.html',
  styleUrl: './modal-product-view.component.css'
})
export class ModalProductViewComponent {

  @Input() product: Product | undefined
  @Output() showModal: EventEmitter<boolean> = new EventEmitter<boolean>()

  handleCloseModal(){
    this.showModal.emit(false);
  }
}
