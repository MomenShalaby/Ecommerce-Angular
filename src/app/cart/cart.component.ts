import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cart: any = [];

  constructor(
    private cartService: CartService,
    private product: ProductsService
  ) {}

  ngOnInit(): void {
    this.cartService.getCart().subscribe((value) => (this.cart = value));
  }
}
