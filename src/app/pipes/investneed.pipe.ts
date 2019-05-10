import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'investneed'
})
export class InvestneedPipe implements PipeTransform {

  transform(value: any, args?: any): any {
   if(value == ""){
   
     return "Not added yet"
  }
  else{
    let investmentneed = JSON.parse(value)
    return investmentneed.total_needed
  }
}

}
