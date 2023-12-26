import { Injectable, EventEmitter } from '@angular/core';
import { HeaderMenuService } from '../../header-menu/header-menu.service';


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

  // serviço estático para ter somente uma instancia para qualquer outro componente que for utilizá-lo
  static attacks = new EventEmitter<string>();

  private itens: string[];


            // importando outro serviço dentro dessa classe service
  constructor( private basicExampleInjectService :HeaderMenuService ){ 
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
      this.basicExampleInjectService.consoleLog("retornando listas de cursos...");
      return this.itens;
  }


  addItem( newItem: string) {
      this.basicExampleInjectService.consoleLog(`criando um novo item com o valor '${newItem}'`);
      this.itens.push( newItem );
      this.emitterPokers.emit( newItem); // emitindo a nova atualizacao/notificao para o component q estiver observando esse servico
      HomeMenuService.attacks.emit(newItem); // atribuindo o novo valor a propriedade estatica para poder ser consultada em diferentes instancias dessa classse 'HomeMenuService' 
  }

} 
