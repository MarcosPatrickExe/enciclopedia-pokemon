import { Pipe, PipeTransform } from '@angular/core';

// annotation for all pipes
@Pipe({
  name: 'pipeFilterArray',
  pure: false, // default is true in others Pipes
})
export class PipeFilterArrayPipe implements PipeTransform {

    transform( arrayValue: any, args: any[]): unknown[] {

        if(arrayValue.length === 0 || args == undefined || args[0]==""){
            return arrayValue;
        }

        arrayValue = arrayValue.map(  (val: string) => val.toLowerCase() )

        return arrayValue.filter(
            (currentValue :string) => currentValue.includes( args[0])
        );
    }
}
