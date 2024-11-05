import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit, OnDestroy{

  slug: string | undefined;
  product: Product | undefined;
  productssub : Subscription | undefined;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ){

  }

  ngOnInit(): void {
    this.slug = this.route.snapshot.params['slug']
    this.productssub = this.productService.getProducts().subscribe({
      next: (products: Product[]) => {
        this.product = products.filter((product) =>(product.slug === this.slug))[0]
        this.isLoading = false
      },
      error: (error: Error) => {
        console.log(error)
        this.isLoading = true
      }
    })
  }

  ngOnDestroy(): void {
    this.productssub?.unsubscribe()
  }
}
