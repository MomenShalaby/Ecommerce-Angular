import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  cart: Array<object> = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCart().subscribe((value) => (this.cart = value));
  }

}
