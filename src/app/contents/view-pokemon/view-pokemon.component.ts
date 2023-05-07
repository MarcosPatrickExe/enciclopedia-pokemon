import { Component, Input, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({
    selector: 'view-pokemon',
    templateUrl: './view-pokemon.component.html',
    styleUrls: ['./view-pokemon.component.scss']
  // inputs: ['dexN : dexNumber']
  // O @Input TBM PODE SER UTILIZADO COMO METADADO, AO INVÉS DE UM DECORATOR, COMO LOGO ABAIXO
})


export class ViewPokemonComponent { //implements OnInit {
    // ngOnInit(): void { }
    
    // ESSE DECORATOR "Input" OBTEM O VALOR DA PROPRIEDADE PASSADA PARA ESSE COMPONENTE E O REPASSA PARA O ATRIBUTO PRIVADO "pokemon_pokedex_number"
    @Input('dexN') 
    dexNumber : string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"; // valor inicial (nao lido)
    // O PARÂMETRO PASSADO PODE SER OPCIONAL, E DEVE SER UTILIZADO QUANDO
    // SE QUER SOMENTE ADICIONAR UM "APELIDO" PARA A VARIAVEL INTERNA 
    // DA CLASSE, COMO O "dexNumber" QUE TEM APELIDO "dexN", E QUE ATRAVES
    // DESSE APELIDO, ELE PODERA SER VISTO PELO COMPONENTE Q CHAMOU ESTE 
    // COMPONENTE, NO CASO, O "app.component.ts"



    @Output('imgHover') 
    imageHovered :any = new EventEmitter();
    // O PARÂMETRO PASSADO PODE SER OPCIONAL, E DEVE SER UTILIZADO QUANDO
    // SE QUER SOMENTE ADICIONAR UM "APELIDO" PARA A VARIAVEL INTERNA 
    // DA CLASSE, COMO O "imageHovered" QUE TEM APELIDO "imgHover", E QUE ATRAVES
    // DESSE APELIDO, ELE PODERÁ SER VISTO PELO COMPONENTE PAI QUE CHAMOU ESTE 
    // COMPONENTE, NO CASO, O "app.component.ts". ALEM DISSO, ESSE ATRIBUTO
    // DO TIPO "EventEmitter" PODE EMITIR UM EVENTO CUSTOMIZADO PARA O COMPONENTE PAI,
    // O QUAL PODERÁ ACESSA-LO UTILIZANDO A SINTAXE DE 'EVENT-BIND'



    constructor() {  // alert(this.dexNumber);
    }
    

    mouseOver(){
          this.imageHovered.emit( "Pokemon recebeu foco do mouse...."
            //   <objCustom>{ propQualquer: 'O mouse passou por cima!!' } 
        );
    }

    mouseOut(){
          this.imageHovered.emit( "Pokemon perdeu foco do mouse...." );
          //tbm eh possivel fazer: { eventProperty: "Pokemon perdeu foco do mouse...."} 
    }
}

interface objCustom extends String {
  propQualquer : string

}
