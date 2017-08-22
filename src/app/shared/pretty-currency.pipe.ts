import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettyCurrency'
})
export class PrettyCurrencyPipe implements PipeTransform {

  transform(price: number, currency?: string): any {
    return (price/100) + ' ' + (currency ? currency : 'EUR') ;
  }

}
