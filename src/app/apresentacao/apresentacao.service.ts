import { Injectable } from '@angular/core';

@Injectable(
   // { providedIn: 'root' }
)
export class ApresentacaoService {

    constructor() { }

    getPokemons(): string[]{
        return ['squirtle', 'charmander', 'treecko', 
                'mudkip', 'torchic', 'blaziken', 'blastoise',
                'combusken', 'eevee']
    }
}
