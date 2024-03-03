import { Pipe, PipeTransform } from '@angular/core';

// annotation for all pipes
@Pipe({
  name: 'pipeFilterArray',
  pure: false, // default is true in others Pipes
})
export class PipeFilterArrayPipe implements PipeTransform {

    transform(value: any, ...args: any): unknown[] {

        if(value.length===0 || args == undefined){
            return value;
        }

        let filterKey = (args instanceof String) ? (args as string) .toLowerCase() : "";

        // fazendo a busca de 'filterKey'
        return value.filter(
            (currValue :any) => (currValue.indexOf(filterKey) != -1)
        );
    }

}
