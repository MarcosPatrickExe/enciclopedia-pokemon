import { Injectable } from '@angular/core';

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
 */
  constructor() { }

  getPokemons(): string[] {
   
    return ['squirtle', 'charmander', 'treecko', 
            'mudkip', 'torchic', 'blaziken', 'blastoise',
            'combusken', 'eevee']
  }
}
