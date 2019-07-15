import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonprint'
})
export class JsonPrint implements PipeTransform{

  transform(value: any, ...args): any {
    return JSON.stringify(value, null, 2)
      .replace('', '&nbsp;')
      .replace('\n', '<br/>');

  }
}
