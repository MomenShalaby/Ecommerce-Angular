import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../interfaces/cart-item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart = new BehaviorSubject<any>([]);
  constructor() {}
  getCart() {
    return this.cart.asObservable();
  }
  // setCart(cartItems: any) {
  //   const currentValue = this.cart.value;
  //   let idExists = currentValue.find((item: any) => item.id == cartItems.id);
  //   if (idExists) {
  //     console.log('exist');
  //     cartItems.quantity += 1;
  //   } else {
  //     this.cart.next([...currentValue, { id: cartItems['id'], quantity: 1 }]);
  //   }

  setCart(cartItems: any) {
    const currentValue = this.cart.value;
    let existingItemIndex = currentValue.findIndex(
      (item: any) => item.id === cartItems.id
    );
    if (existingItemIndex !== -1) {
      console.log('exists');
      currentValue[existingItemIndex].quantity += 1;
      this.cart.next([...currentValue]);
    } else {
      this.cart.next([...currentValue, { id: cartItems.id, quantity: 1 }]);
    }
  }
  // const updatedValue = [
  //   ...currentValue,
  //   { id: cartItems['id'], quantity: 1 },
  // ];
  // this.cart.next(cartItem);
  // const currentValue = this.cart.value;
  // const updatedValue = [...currentValue];

  // for (const newItem of cartItems) {
  //   const existingItemIndex = updatedValue.findIndex(
  //     (item) => item.id === newItem.id
  //   );
  //   if (existingItemIndex !== -1) {
  //     // If item already exists, increment count
  //     if (updatedValue[existingItemIndex]) {
  //       // Check if defined
  //       updatedValue[existingItemIndex].count++; // Optional chaining here
  //     }
  //   } else {
  //     // Otherwise, add new item
  //     updatedValue.push(newItem);
  //   }
  // }

  // this.cart.next(updatedValue);
  // }
}
