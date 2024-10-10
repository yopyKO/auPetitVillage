import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice'
})
export class SortByPricePipe implements PipeTransform {

  transform(products:any[], property: string, direction: 'asc' | 'desc' ) : any[]{
    if (!products) {
      return products;
    }
    return products.sort((a:any, b:any) => {


      if (a.price < b.price) {
        return direction === 'asc' ? 1 : -1;
      } else if (a.price > b.price) {
        return direction === 'asc' ? -1 : 1;
      } else {
        return 0;
      }
    });
  }

}
