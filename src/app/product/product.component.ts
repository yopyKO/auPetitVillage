import { Component } from '@angular/core';
import * as prod from '../product/products.json';


interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  imageAlt: string;
  quantity: number;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent {
  products: any = (prod as any).default;

  i=4;
  selectedProductId = this.i; // L'ID de la figurine à afficher

  get selectedProduct() {
    return this.products.find((product: { id: number; }) => product.id === this.selectedProductId);
  }

  nextProduct() {
    this.selectedProductId++;
    if (this.selectedProductId > this.products.length) {
      this.selectedProductId = 1; // Retour au début si on dépasse la fin du tableau
    }
  }

}
