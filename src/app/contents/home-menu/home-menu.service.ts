import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeMenuService {
/**
 * Vale lembrar q todo servico pode ser declarado dentro de modulos de funcionalidades ou
 * no modulo global, variando o seu escopo de acesso por outros componentes
 * dependendo do seu escopo. Contudo, mesmo se o servico for usado por diversos
 * componentes, a sua instancia seguirá o padrao singleton quando aplicada a 
 * injecao de dependencia. Contudo, caso seja adicionado o mesmo service para componentes diferentes,
 * entao o padrao singleton sera desfeito, visto que sera gerado varias instancias diferentes para
 * esses componentes.
 * 
   OBS: os servicos tbm podem se comunicar entre si, sem precisar de um componente comum entre eles
 */

   // emitindo evento para qualquer outro servico:
  public emitterPokers = new EventEmitter<string>();


  private pokemons: string[];

  constructor() { 
      this.pokemons =  ['squirtle', 'charmander', 'treecko', 
      'mudkip', 'torchic', 'blaziken', 'blastoise',
      'combusken', 'eevee']

      console.log("no construtor 'HomeMenuService'");
  }


  getPokemons(): string[] {
      return this.getPokemons();
  }

  addPokemon( pokeName: string){
       this.pokemons.push( pokeName );
       this.emitterPokers.emit( pokeName);
  }

}
