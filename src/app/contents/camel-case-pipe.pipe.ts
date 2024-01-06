import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'camelCasePipe' //o atributo 'name' é equivalente à um 'selector' declarado nos 'components'
})
export class CamelCasePipePipe implements PipeTransform {

  // metodo responsavel por recebero valor 'value' e os argumentos para a formatação do valor recebido, podendo retornar qualquer tipo de objeto, por isso o 'unknown'
  transform(value: unknown, ...args: unknown[]): unknown {
   //   let val = value.split;
      
      return null;
  }

}
