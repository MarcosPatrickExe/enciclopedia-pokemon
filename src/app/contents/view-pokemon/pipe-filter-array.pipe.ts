import { Pipe, PipeTransform } from '@angular/core';


// annotation for all pipes
@Pipe({
  name: 'pipeFilterArray',
  pure: true, // default is true in others Pipes
})
export class PipeFilterArrayPipe implements PipeTransform {

    transform( arrayValue: any, ...args: any): unknown[] {

        if(arrayValue.length === 0 || args == undefined || args[0]==""){
            return arrayValue;
        }

        for(let item of args){
            console.log(`ìtem:  ${item}`);
        }

        arrayValue = arrayValue.map(  (val: string) => val.toLowerCase() )

        return arrayValue.filter(
            (currentValue :string) => currentValue.includes( args[0])
        );
    }
}
