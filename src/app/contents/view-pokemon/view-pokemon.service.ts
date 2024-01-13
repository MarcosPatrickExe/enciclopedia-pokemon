import { Injectable } from '@angular/core';
import { Type, Pokemon } from '../../types/pokemon';
import { HomeMenuService } from '../home-menu/home-menu.service';


@Injectable({
    providedIn: 'root'
})

// eh nos escopo de servico que tambem coloca-se as regras de negocio e chamada de funções  do banco de dados.
export class ViewPokemonService { // classes de servico tbm podem ter metodos utilitarios!!

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
            name :"Staraptor",
            imgLink :"https://projectpokemon.org/images/normal-sprite/staraptor-f.gif",
            types : [Type.NORMAL, Type.FLYING]
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
            name :"Empoleon",
            imgLink :"https://projectpokemon.org/images/normal-sprite/empoleon.gif",
            types : [Type.WATER, Type.STEEL]
          },
      ];
  }


}