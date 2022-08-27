import { Component, OnInit } from '@angular/core';
import { HeaderMenuService } from './header-menu.service';
// importando o servico que sera utilizado por esse componente....

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})

export class HeaderMenuComponent implements OnInit {

  nomePortal : string;
  pokemons: string[];
  urlImagem :string = 'http://lorempixel.com/400/200/nature/';

  // o atributo privado "servico" faz com que ele seja automaticamente declarado
  // como atributo dessa classe "ApresentacaoComponent"....
  // � como se fizesse o seguinte:
  // this.servico = servico;
  constructor( private servico : HeaderMenuService ) { 
      // var buscarPokemons = new ApresentacaoService();
      // ao inv�s de instanciar um servico manualmente, 
      // pode-se cham�-lo ou instancia-lo automaticamente 
      // utilizando injecao de dependencia com o decorator "@injectable".... 

      this.nomePortal = 'http://loiane.training';

      this.pokemons = servico.getPokemons(); // acessando o servico via injecao de dependencia
  }

  ngOnInit(): void { }

  getValor():number {
     return 5000;
  }
  

}
