import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  imports: [],
  standalone: true,
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  items = signal<string[]>(['shoes', 'shirt', 'socks'])

  removeItem(item: string) {
    this.items.update(items => items.filter(i => i !== item ))
  }
}


