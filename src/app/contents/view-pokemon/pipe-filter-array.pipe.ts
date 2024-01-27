import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeFilterArray'
})
export class PipeFilterArrayPipe implements PipeTransform {

    transform(value: any, ...args: any): unknown[] {

        if(value.length===0 || args == undefined){
            return value;
        }

        let filterKey = args.toLowerCase();

        // fazendo a busca de 'filterKey'
        return value.filter(
            (currValue :any) => (currValue.indexOf(filterKey) != -1)
        );
    }

}
