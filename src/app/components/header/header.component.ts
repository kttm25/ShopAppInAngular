import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  siteName = environment.siteName
  constructor(private ProductService: ProductService){}

  ngOnInit(): void {

  }
}
