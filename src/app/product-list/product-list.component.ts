import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products = [
    {
      title: "Robes femmes",
      soldPrice: 29.99,
      normalPrice: 35.99,
      color: "green"
    },
    {
      title: "Montres femmes",
      soldPrice: 39.99,
      normalPrice: 59.99,
      color: "violet"
    },
    {
      title: "Jupes femmes",
      soldPrice: 59.99,
      normalPrice: 135.99,
      color: "red"
    },
    {
      title: "Robes femmes",
      soldPrice: 129.99,
      normalPrice: 215.99,
      color: "yellow"
    },
    {
      title: "Robes femmes",
      soldPrice: 29.99,
      normalPrice: 35.99,
      color: "teal"
    },
    {
      title: "Robes femmes",
      soldPrice: 29.99,
      normalPrice: 35.99,
      color: "green"
    },
    {
      title: "Robes femmes",
      soldPrice: 29.99,
      normalPrice: 35.99,
      color: "blue"
    },
    {
      title: "Robes femmes",
      soldPrice: 29.99,
      normalPrice: 35.99,
      color: "gray"
    }
  ]
}
