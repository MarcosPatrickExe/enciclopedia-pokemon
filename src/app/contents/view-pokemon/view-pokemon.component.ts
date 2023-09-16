import { Component, Input, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
//import { EventEmitter } from 'stream';
import { ViewPokemonService } from './view-pokemon.service';
import { Pokemon, Type } from '../../types/pokemon';

import * as _ from 'lodash';


@Component({
    selector: 'app-view-pokemon',
    templateUrl: './view-pokemon.component.html',
    styleUrls: ['./view-pokemon.component.scss']
  // inputs: ['urlImg : urlImage']
  // outputs: ['imgHover : imageHovered']
  // O @Input TBM PODE SER UTILIZADO COMO METADADO, AO INVÉS DE UM DECORATOR, COMO LOGO ABAIXO
})

export class ViewPokemonComponent implements OnInit{ //implements OnInit {
    // ngOnInit(): void { }
    
    listLodash = _.map([1, 2, 3], (n)=> `# ${n}`);// utilizando o Lodash
    public pokemonList :Pokemon[];
    type = Type;


    constructor( private pokeService :ViewPokemonService ){
        this.pokemonList = pokeService.pokemons; // acessando propriedade ja inicializada pelo construtor da propria classe ViewPokemonService

        this.urlImage = "";
    }


    // ESSE DECORATOR "Input" OBTEM O VALOR DA PROPRIEDADE PASSADA PARA ESSE COMPONENTE E O REPASSA PARA O ATRIBUTO PRIVADO "dexNumber"
    // eslint-disable-next-line @angular-eslint/no-input-rename
    @Input('urlImg')
    urlImage : string; // valor inicial (nao lido)
    // O PARÂMETRO PASSADO PODE SER OPCIONAL, E DEVE SER UTILIZADO QUANDO
    // SE QUER SOMENTE ADICIONAR UM "APELIDO" PARA A VARIAVEL INTERNA 
    // DA CLASSE, COMO O "dexNumber" QUE TEM APELIDO "dexN", E QUE ATRAVES
    // DESSE APELIDO, ELE PODERA SER VISTO PELO COMPONENTE Q CHAMOU ESTE 
    // COMPONENTE, NO CASO, O "app.component.ts"



    // eslint-disable-next-line @angular-eslint/no-output-rename
    @Output('imgHover') 
    imageHovered :any = new EventEmitter();
    // O PARÂMETRO PASSADO PODE SER OPCIONAL, E DEVE SER UTILIZADO QUANDO
    // SE QUER SOMENTE ADICIONAR UM "APELIDO" PARA A VARIAVEL INTERNA 
    // DA CLASSE, COMO O "imageHovered" QUE TEM APELIDO "imgHover", E QUE ATRAVES
    // DESSE APELIDO, ELE PODERÁ SER VISTO PELO COMPONENTE PAI QUE CHAMOU ESTE 
    // COMPONENTE, NO CASO, O "app.component.ts". ALEM DISSO, ESSE ATRIBUTO
    // DO TIPO "EventEmitter" PODE EMITIR UM EVENTO CUSTOMIZADO PARA O COMPONENTE PAI,
    // O QUAL PODERÁ ACESSA-LO UTILIZANDO A SINTAXE DE 'EVENT-BIND'


    ngOnInit(){
        console.log("valor urlImage value: "+this.urlImage);
    }

    mouseOver(){
          this.imageHovered.emit( "Pokemon recebeu foco do mouse....");
            //   <objCustom>{ propQualquer: 'O mouse passou por cima!!' } 
    }

    mouseOut(){
          this.imageHovered.emit( {message: "Pokemon perdeu foco do mouse...."} );
          //tbm eh possivel fazer: { eventProperty: "Pokemon perdeu foco do mouse...."} 
    }

}
