import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() title: string = "";
  @Input() soldPrice: number = 0;
  @Input() normalPrice: number = 0;
  @Input() color: string = "";
}
