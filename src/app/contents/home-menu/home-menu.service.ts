import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeMenuService {
/**
 * Vale lembrar q todo servico pode ser declarado dentro de modulos de funcionalidades ou
 * no modulo global, variando o seu escopo de acesso por outros componentes
 * dependendo do local onde eh declarado. Mesmo se o servico for usado por diversos
 * componentes, a sua instancia seguirá o padrao singleton quando aplicada a 
 * injecao de dependencia. Contudo, caso seja adicionado o mesmo service para componentes diferentes, atraves 
 * do metadado 'providers: [...]', entao sera criada uma instancia diferente para cada servico!
 * entao o padrao singleton sera desfeito, visto que sera gerado varias instancias diferentes para
 * esses componentes.
 * 
   OBS: os servicos tbm podem se comunicar entre si, sem precisar de um componente comum entre eles
 */

   // emitindo evento para qualquer outro servico:
  public emitterPokers = new EventEmitter<string>();


  private itens: string[];

  constructor() { 
      this.itens = [
          'ice fang', 
          'heavy ball', 
          'focus sash', 
          'carbon', 
          'herb', 
          'pearl', 
          'hyper potion',
          'cheri berry', 
          'attack X'
      ]

      console.log("no construtor 'HomeMenuService'");
  }


  getPokeItems(): string[] {
      return this.itens;
  }

  addItem( newItem: string) {
       this.itens.push( newItem );
       this.emitterPokers.emit( newItem); // emitindo a nova atualizacao/notificao para o component q estiver observando esse servico
  }

}
