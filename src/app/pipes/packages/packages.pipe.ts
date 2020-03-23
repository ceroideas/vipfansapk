import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'packages'
})
export class PackagesPipe implements PipeTransform {

  transform(value: any, _type): any {
  	let type = localStorage.getItem(_type);
  	console.log(type);
  	if(type){
  		type = JSON.parse(type);
  		if (value == type[2]){return true;}
  		return false;
  	}
    return true;
  }

}
