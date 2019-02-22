import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flTrancator'
})
export class FlTrancatorPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    let newstring = value.toString().split(" ").splice(0,20).join(" ")
    return newstring +" ..." ;
  }

}
