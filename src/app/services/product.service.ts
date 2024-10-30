import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { interval, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      _id: "12324",
      name: "Robes pour femmes",
      soldPrice: 29.99,
      regularPrice: 35.99,
      created_At: new Date(),
      category: ["Vetements"],
      description: "Super roble pour femmes",
      imageUrl: [
        "./images/robe1.jpg",
        "./images/robe2.jpg",
        "./images/robe3.jpg",
      ]
    },
    {
      _id: "12034",
      name: "Montres femmes",
      soldPrice: 39.99,
      regularPrice: 59.99,
      created_At: new Date(),
      category: ["Accessoire"],
      description: "Accessoire",
      imageUrl: [
        "./images/montre1.jpg",
        "./images/montre2.jpg",
        "./images/montre3.jpg",
      ]
    },
    {
      _id: "33034",
      name: "Jupes femmes",
      soldPrice: 59.99,
      regularPrice: 135.99,
      created_At: new Date(),
      category: ["Vetements"],
      description: "Vetements pour femmes",
      imageUrl: [
        "./images/jupe1.jpg",
        "./images/jupe2.jpg",
        "./images/jupe3.jpg",
      ]
    },
    {
      _id: "51234",
      name: "Robes femmes",
      soldPrice: 129.99,
      regularPrice: 215.99,
      created_At: new Date(),
      category: ["Vetements"],
      description: "Superbe robes pour femmes",
      imageUrl: [
        "./images/robe1.jpg",
        "./images/robe2.jpg",
        "./images/robe3.jpg",
      ]
    },
    {
      _id: "61234",
      name: "Robes femmes",
      soldPrice: 29.99,
      regularPrice: 35.99,
      created_At: new Date(),
      category: ["Vetements"],
      description: "Superbe robes pour femmes",
      imageUrl: [
        "./images/robe1.jpg",
        "./images/robe2.jpg",
        "./images/robe3.jpg",
      ]
    },
    {
      _id: "14235",
      name: "Robes femmes",
      soldPrice: 29.99,
      regularPrice: 35.99,
      created_At: new Date(),
      category: ["Vetements"],
      description: "Superbe robes pour femmes",
      imageUrl: [
        "./images/robe1.jpg",
        "./images/robe2.jpg",
        "./images/robe3.jpg",
      ]
    },
    {
      _id: "1234534",
      name: "Robes femmes",
      soldPrice: 29.99,
      regularPrice: 35.99,
      created_At: new Date(),
      category: ["Vetements"],
      description: "Superbe robes pour femmes",
      imageUrl: [
        "./images/robe1.jpg",
        "./images/robe2.jpg",
        "./images/robe3.jpg",
      ]
    },
    {
      _id: "12334",
      name: "Robes femmes",
      soldPrice: 29.99,
      regularPrice: 35.99,
      created_At: new Date(),
      category: ["Vetements"],
      description: "Superbe robes pour femmes",
      imageUrl: [
        "./images/robe1.jpg",
        "./images/robe2.jpg",
        "./images/robe3.jpg",
      ]
    }
  ];

  constructor() { }

  getProducts(): Promise<Product[]>{
    return new Promise((resolve, reject) =>{
      if(this.products.length)
        resolve(this.products)
      else
        reject([])
    })
  }

  getNumber(): Observable<Number>{
    return of(60);
  }

  getSecond(): Observable<Number>{
    return interval(1000);
  }

  addProduct(product: Product){}

  editProduct(_id:string, product: Product){}

  deleteProduct(_id: string){}

  findProduct(_id: string){}

}
