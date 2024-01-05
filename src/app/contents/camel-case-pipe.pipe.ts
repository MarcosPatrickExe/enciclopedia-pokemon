import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCasePipe'
})
export class CamelCasePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
