import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';
import { subscribe } from 'diagnostics_channel';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit, OnDestroy {

  products: Product[] = [];

  productsSub: Subscription | undefined;
  showModal = false;
  isLoading : boolean = true;
  productSelect: Product | undefined

  constructor(private productService: ProductService){

  }

  ngOnInit(): void {
    this.productsSub = this.productService.getProducts().subscribe(
      {
        next: (products: Product[]) => {
          this.products = products
          this.isLoading = false;
        },
        error: (error: Error) => {
          console.log(error);
          this.isLoading = true;
        },
        complete: () => console.log("complete"),
      }
    )
  }

  ngOnDestroy(): void {
    this.productsSub?.unsubscribe()
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
