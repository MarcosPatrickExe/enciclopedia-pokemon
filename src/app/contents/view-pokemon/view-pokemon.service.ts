import { Injectable } from '@angular/core';
import { Type, Pokemon } from '../../types/pokemon';


@Injectable({
  providedIn: 'root'
})
export class ViewPokemonService {

  pokemons :Pokemon[];

  constructor() { 
      this.pokemons = [
          {
            name :"Infernape",
            imgLink :"https://projectpokemon.org/images/normal-sprite/infernape.gif",
            types : [Type.FIRE, Type.FIGHTING]
          },
          {
            name :"Luxray",
            imgLink :"https://projectpokemon.org/images/normal-sprite/luxray-f.gif",
            types : [Type.ELECTRIC, Type.EMPTY]
          },
          {
            name :"Empoleon",
            imgLink :"https://projectpokemon.org/images/normal-sprite/empoleon.gif",
            types : [Type.WATER, Type.STEEL]
          },
          {
            name :"Ambipon",
            imgLink :"https://projectpokemon.org/images/normal-sprite/ambipom-f.gif",
            types : [Type.NORMAL, Type.EMPTY]
          },
          {
            name :"Drapion",
            imgLink :"https://projectpokemon.org/images/normal-sprite/drapion.gif",
            types : [Type.POISON, Type.DARK]
          },
          {
            name :"Gliscor",
            imgLink :"https://projectpokemon.org/images/normal-sprite/gliscor.gif",
            types : [Type.GROUND, Type.FLYING]
          },
          {
            name :"Spiritomb",
            imgLink :"https://projectpokemon.org/images/normal-sprite/spiritomb.gif",
            types : [Type.GHOST, Type.DARK]
          },
          {
            name :"Staraptor",
            imgLink :"https://projectpokemon.org/images/normal-sprite/staraptor-f.gif",
            types : [Type.NORMAL, Type.FLYING]
          },
      ];
  }
}
