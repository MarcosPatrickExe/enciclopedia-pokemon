import { Pipe, PipeTransform } from '@angular/core';


// annotation for all pipes
@Pipe({
  name: 'pipeFilterArray',
  pure: true, // default is true in others Pipes
})
export class PipeFilterArrayPipe implements PipeTransform {

    transform( arrayValue: any, args: any[]): string[] {
        console.log(`args 0:  ${args[0]}  ///  1: ${args[1] }`);

        if( ((args[0] as string).length>0)  &&  (args[1] == "onlyValue") ){
            return [args[0] as string];

        }else if( args[0].length==0  &&  args[1] == "onlyValue"){
            return [""];
            
        }else if(arrayValue.length === 0 || args == undefined || args[0]==""){
            return arrayValue;
        }
       
        // for(let item of args){
        //     console.log(`item:  ${item}`);
        // }

        arrayValue = arrayValue.map(  (val: string) => val.toLowerCase() )

        return arrayValue.filter(
            (currentValue :string) => currentValue.includes( args[0])
        );
    }
}
