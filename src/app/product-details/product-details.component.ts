import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import productsData from '../../assets/products-list.json';
import { Product } from '../interfaces/product';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  // products: Array<Product> = productsData;
  @Input() id?: any;
  product: any = {};

  cartItems = [{}];

  constructor(
    private activatedRoute: ActivatedRoute,
    private cart: CartService,
    private productService: ProductsService
  ) {
    // const id: any = this.activatedRoute.snapshot.id;
  }

  ngOnInit(): void {
    // this.product = this.products.find((p: any) => p.id == this.id);
    // this.product = this.productService.getProduct(this.id);
    this.productService
      .getProduct(this.id)
      // .subscribe((res) => (this.product = res));
      .subscribe((res) => (console.log(res)));
    console.log(this.product);
    this.cart.getCart().subscribe((value) => (this.cartItems = value));
  }

  // get stars() {
  //   return Array(Math.floor(this.product.rating)).fill(0);
  // }

  addToCart() {
    this.cart.setCart(this.product.id);
    console.log(this.cartItems);
  }
}
