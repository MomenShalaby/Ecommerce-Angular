import { Component } from '@angular/core';
import productsData from '../../assets/products-list.json';
import { Product } from '../interfaces/product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent {
  // products: Array<Product> = productsData;
  products: any = [];
  constructor(private productService: ProductsService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.productService
      .getProducts()
      .subscribe((response: any) => (this.products = response['products']));
  }
}
