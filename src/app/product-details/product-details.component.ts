import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import productsData from '../../assets/products-list.json';
import { Product } from '../interfaces/product';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  products: Array<Product> = productsData;
  product: any;
  @Input() id?: number;

  cartItems = [{}];

  constructor(
    private activatedRoute: ActivatedRoute,
    private cart: CartService
  ) {
    // const id: any = this.activatedRoute.snapshot.id;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // const id: any = this.activatedRoute.snapshot.params['id'];
    // console.log(this.id, 'from details');
    this.product = this.products.find((p: any) => p.id == this.id);
    this.cart.getCart().subscribe((value) => (this.cartItems = value));
  }

  get stars() {
    return Array(Math.floor(this.product.rating)).fill(0);
  }

  addToCart() {
    this.cart.setCart(this.product.id);
    console.log(this.cartItems);
  }
}
