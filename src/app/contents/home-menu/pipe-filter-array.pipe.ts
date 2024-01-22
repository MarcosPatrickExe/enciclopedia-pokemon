import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeFilterArray'
})
export class PipeFilterArrayPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
