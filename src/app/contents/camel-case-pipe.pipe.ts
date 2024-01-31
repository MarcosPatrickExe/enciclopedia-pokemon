import { Pipe, PipeTransform } from '@angular/core';


// VALE LEMBRAR QUE EH FORTEMENTE INDICADO QUE OS PIPES NAO DEVEM SER USADOS PARA FILTRAR ARRAYS
@Pipe({
    name: 'camelCasePipe' //o atributo 'name' é equivalente à um 'selector' declarado nos 'components'
})


export class CamelCasePipePipe implements PipeTransform {

    // 'transform' eh o metodo sobrescrito da interfacce 'PipeTransform'
    // metodo responsavel por recebero valor 'value' e os argumentos para a formatação do valor recebido, podendo retornar qualquer tipo de objeto, por isso o 'unknown'
    transform( value: any, ...args: unknown[] ): unknown {

         console.log("valor de 'value': "+value+"  /// Valor de args: "+args.toString() );

    //   let val = value.split;
         let values = value.split(' ');
         let result = '';

         for(let v of values){
            result += this.capitalize(v)+' '; // concatenando todos os valores
         }

         return result; // por padrao o pipe retorna o valor 'null'
    }

    // FUNCAO PARA PERSONALIZAR AS PALAVRAS, COLOCANDO-AS EM CAIXA ALTA
    capitalize(value :string) : string{
        return value.substr(0, 1).toUpperCase()+value.substr(1) + value.substr(1).toLowerCase();
    }
}
