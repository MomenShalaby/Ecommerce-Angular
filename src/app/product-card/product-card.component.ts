import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product: any;

  constructor(private router: Router) {}

  addToCart(id: any) {
    this.router.navigate(['product-details', id]);
  }
  get stars() {
    return Array(Math.floor(this.product.rating)).fill(0);
  }
}
