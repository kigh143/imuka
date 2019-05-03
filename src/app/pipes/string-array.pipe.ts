import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringArray'
})
export class StringArrayPipe implements PipeTransform {
  origarray:string;
  transform(value: any, args?: any): any {
    let arrayres = JSON.parse(value);
    return arrayres.join(", ");

  }

}
