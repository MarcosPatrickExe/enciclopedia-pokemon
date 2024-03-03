import { Pipe, PipeTransform } from '@angular/core';

// annotation for all pipes
@Pipe({
  name: 'pipeFilterArray',
  pure: false, // default is true in others Pipes
})
export class PipeFilterArrayPipe implements PipeTransform {

    transform(arrayValue: any, ...args: any): unknown[] {

        if(arrayValue.length === 0 || args == undefined){
            return arrayValue;
        }

        let filterKey = (args instanceof String) ? (args as string) .toLowerCase() : "";

        // fazendo a busca de 'filterKey'
        return arrayValue.filter(
            (currentValue :any) => (currentValue.indexOf(filterKey) != -1)
        );
    }

}
