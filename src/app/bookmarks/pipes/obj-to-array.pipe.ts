import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objToArray',
  pure: true
})
export class ObjToArrayPipe implements PipeTransform {
  transform(value: any): any[] {
    const res = [];
    for (const key in value) {
      if (value[key]) {
        res.push(value[key]);
      }
    }
    return res;
  }
}
