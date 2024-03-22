import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import productsData from '../../assets/products-list.json';
import { Product } from '../interfaces/product';
import { CommonModule } from '@angular/common';

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

  constructor(private activatedRoute: ActivatedRoute) {
    // const id: any = this.activatedRoute.snapshot.id;
  }

  get stars() {
    return Array(Math.floor(this.product.rating)).fill(0);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // const id: any = this.activatedRoute.snapshot.params['id'];
    // console.log(this.id, 'from details');
    this.product = this.products.find((p: any) => p.id == this.id);
  }
}
