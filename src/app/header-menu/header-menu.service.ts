import { Injectable } from '@angular/core';


@Injectable( /* { providedIn: 'root' } */)

export class HeaderMenuService {

  constructor() { }

  getPokemons(): string[]{
   
      return ['squirtle', 'charmander', 'treecko', 
              'mudkip', 'torchic', 'blaziken', 'blastoise',
              'combusken', 'eevee']
  }
}
