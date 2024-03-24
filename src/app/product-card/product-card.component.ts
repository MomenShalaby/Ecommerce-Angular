import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product: any;
  cartItems = [{}];
  constructor(private router: Router, private cart: CartService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.cart.getCart().subscribe((value) => (this.cartItems = value));
  }

  productDetails(id: any) {
    //  this.router.navigate([`/game-details/${id}`])

    this.router.navigate([`/product-details/${id}`]);
  }

  addToCart() {
    this.cart.setCart(this.product);
  }

  get stars() {
    return Array(Math.floor(this.product.rating)).fill(0);
  }
}
