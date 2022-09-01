import { Component, Input } from '@angular/core';

@Component({
  selector: 'view-pokemon',
  templateUrl: './view-pokemon.component.html',
  styleUrls: ['./view-pokemon.component.css']
 // inputs: ['dexN : dexNumber']
 // O @Input TBM PODE SER UTILIZADO COMO METADADO, AO INVÉS DE UM DECORATOR, COMO LOGO ABAIXO
})

export class ViewPokemonComponent { //implements OnInit {
 // ngOnInit(): void { }
 
 // ESSE DECORATOR "Input" OBTEM O VALOR DA PROPRIEDADE PASSADA PARA ESSE COMPONENTE E O REPASSA PARA O ATRIBUTO PRIVADO "pokemon_pokedex_number"
 @Input('dexN') dexNumber : string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png";
 // O PARÂMETRO PASSADO PODE SER OPCIONAL, E DEVE UTILIZADO QUANDO
 // SE QUER SOMENTE ADICIONAR UM "APELIDO" PARA A VARIAVEL INTERNA 
 // DA CLASSE, COMO O "dexNumber" QUE TEM APELIDO "dexN", E QUE ATRAVES
 // DESSE APELIDO, ELE PODERA SER VISTO PELO COMPONENTE Q CHAMOU ESTE 
 // COMPONENTE, NO CASO, O "app.component.html"


 constructor() { 
   // alert(this.dexNumber);
 }

}
