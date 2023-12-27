import { Component, Input, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
//import { EventEmitter } from 'stream';
import { ViewPokemonService } from './view-pokemon.service';
import { Pokemon, Type } from '../../types/pokemon';
import { HomeMenuService } from '../home-menu/home-menu.service';

import * as _ from 'lodash';


@Component({
    selector: 'app-view-pokemon',
    templateUrl: './view-pokemon.component.html',
    styleUrls: ['./view-pokemon.component.scss'],
  // inputs: ['urlImg : urlImage']
  // outputs: ['imgHover : imageHovered']
  // providers: [ViewPokemonService]
  // O @Input TBM PODE SER UTILIZADO COMO METADADO, AO INVÉS DE UM DECORATOR, COMO LOGO ABAIXO
  // tbm eh possivel adicionar varios services para um so componente
})

export class ViewPokemonComponent implements OnInit{ //implements OnInit {
    // ngOnInit(): void { }
    
    listLodash = _.map( [1, 2, 3], (n)=> `# ${n}` );// utilizando o Lodash, uma mini lib
    public pokemonList :Pokemon[];
    type = Type;

    public pokeItens :string[];


    defaultTrainter : any = {
        name: 'Ash',
        rating: 4.54321,
        pokemonsCatched: 201,
        insignias: 6,
        isChampion: false,
        pokemonTeam: ['Charizard', 'Heracross', 'Shedinja', 'Samurott'],
        BeginningJourneyDate: new Date(2008, 6, 11),
    }




    constructor( private pokeService :ViewPokemonService, private pokeItensService :HomeMenuService ){
        this.pokemonList = pokeService.pokemons; // acessando propriedade ja inicializada pelo construtor da propria classe ViewPokemonService
        this.urlImage = "";
    }
    // ESSE DECORATOR "Input" OBTEM O VALOR DA PROPRIEDADE PASSADA PARA ESSE COMPONENTE E O REPASSA PARA O ATRIBUTO PRIVADO "dexNumber"
    // eslint-disable-next-line @angular-eslint/no-input-rename
    @Input('urlImg') 
    urlImage : string; // valor inicial (nao lido)
    // O PARÂMETRO PASSADO PODE SER OPCIONAL, E DEVE SER UTILIZADO QUANDO
    // SE QUER SOMENTE ADICIONAR UM "APELIDO" PARA A VARIAVEL INTERNA 
    // DA CLASSE, COMO O "urlImage" QUE TEM APELIDO "dexN", E QUE ATRAVES
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

    mouseOver(){
          this.imageHovered.emit( "Pokemon recebeu foco do mouse....");
            //   <objCustom>{ propQualquer: 'O mouse passou por cima!!' } 
    }

    mouseOut(){
          this.imageHovered.emit( {message: "Pokemon perdeu foco do mouse...."} );
          //tbm eh possivel fazer: { eventProperty: "Pokemon perdeu foco do mouse...."} 
    }

    addItens( itemName :string){
         this.pokeItensService.addItem( itemName );
         // adicionando valor no serviço 'hom-menu-service'
    }


    ngOnInit(){
        console.log("valor urlImage value: "+this.urlImage);
        this.pokeItens = this.pokeItensService.getPokeItems();

          // lembre-se que inicializar o service nesse metodo de ciclo de vida do angular nao eh uma boa pratica! O correto eh no construtor!
        this.pokeItensService.emitterPokers.subscribe( // se increvendo nesse observable do Event Emitter
              newItem => {
                  console.log("Foi detectado o evento do servico 'home-menu-service' no componente 'view-pokemon.component.ts'");
                  this.pokeItens.push( newItem);
                  // adicionando o novo item adicionado no serviço para a lista de 'pokeItens' local.
              }
        );


        // alternativa para caso precise num EventEmitter estático da classe HomeMenuService:
        /*
        HomeMenuService.attacks.subscribe(
              (newItem) => {
                  console.log("Foi detectado o evento do servico estático da classe 'home-menu-service' no componente 'view-pokemon.component.ts'");
                  this.pokeItens.push( newItem);
              }
        );
        */
        /* a vantagem de usar um objeto do tipo EventEmitter estático se dá pela facilidade em usá-lo, visto que não precisa
           ser instanciado automaticamente, via injeção de dependência, no construtor, como é feito com o EventEmitter denominado
           'pokeItensService' do tipo 'HomeMenuService'.
        */
    }

}
