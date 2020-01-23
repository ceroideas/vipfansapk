import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vip'
})
export class VipPipe implements PipeTransform {

  transform(value: any): any {
  	if (value.last_name == 'edu_motive' || value.last_name == 'vipfansapk' || value.last_name == 'chris123') {
  		return true;
  	}
    return false;
  }

}
