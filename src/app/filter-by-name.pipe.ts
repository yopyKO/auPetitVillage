import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(products:any[], searchText: string): any[] {
       if(!products) return [];
       if(!searchText) return products;
       searchText = searchText.toLowerCase();
       return products.filter( it => {
         return it['name'].toLowerCase().includes(searchText);
       });
     }
   }
