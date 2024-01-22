import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeFilterArray'
})
export class PipeFilterArrayPipe implements PipeTransform {

  transform(value: String[], ...args: unknown[]): unknown {

    if(value.length===0 || args == undefined){
       return value;
    }

    


    return null;
  }

}
