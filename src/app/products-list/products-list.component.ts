import { Component } from '@angular/core';
import productsData from '../../assets/products-list.json';
import { Product } from '../interfaces/product';
import { ProductCardComponent } from '../product-card/product-card.component';
@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent {
  products: Array<Product> = productsData;

}
