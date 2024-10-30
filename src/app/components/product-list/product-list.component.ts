import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  showModal = false;
  productSelect: Product | undefined

  constructor(private productService: ProductService){

  }
  ngOnInit(): void {
    this.productService.getProducts().then((result)=>{
      this.products = result
    }).catch((e) => this.products = [])
  }

  handleDeleteProduct(product: Product){
    this.products = this.products.filter(item => item._id !== product._id)
  }

  handleGetProduct(product: Product){
    this.productSelect = product
  }

  handleShowProductDetails(showState : boolean){
    console.log(showState)
    this.showModal = showState;
  }
}
