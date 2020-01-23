import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hidden'
})
export class HiddenPipe implements PipeTransform {

  transform(value: any, type: any): any {

  	let _type = JSON.parse(localStorage.getItem(type));

  	if (_type.find(x=> value.id == x)) {
  		return true;
  	}

    return false;
  }

}
