import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clength'
})
export class ClengthPipe implements PipeTransform {

  transform(value: any): any {
  	let total = 0;
    for (var i = 0; i < value.length; i++) {
    	if (value[i]) {
    		total++;
    	}
    }
    return total;
  }

}
