import { Component } from '@angular/core';
import * as prod from '../product/products.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'au-petit-village-no-sa';
  products: any = (prod as any).default;

  searchTerm = '';

  sortOrder: 'desc' | 'asc' = 'desc';
  toggleSortOrder() {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
  }

  constructor(){
    console.log(prod);
  }
}
