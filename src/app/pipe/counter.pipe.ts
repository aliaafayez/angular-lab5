import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'counter'
})
export class CounterPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if(value> 0) {return "IN stock"; }else{
      return "out of stock";
    }
  }

}
