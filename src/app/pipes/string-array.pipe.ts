import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringArray'
})
export class StringArrayPipe implements PipeTransform {
  origarray:string;
  transform(value: any, args?: any): any {
    if(value[0]=='['){
       let arrayres = JSON.parse(value);
      return arrayres.join(", ");
      // return value[0];
    }
     else{
       return value;
     }
  }

}
