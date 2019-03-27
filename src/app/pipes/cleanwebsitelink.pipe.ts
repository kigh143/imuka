import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cleanwebsitelink'
})
export class CleanwebsitelinkPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const strings = value.split("//");
    if( strings.length == 2 ){
      return value;
    }else{
      return "https://" + value;
    }
  }

}
