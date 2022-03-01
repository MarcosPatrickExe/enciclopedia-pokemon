import { Component, OnInit } from '@angular/core';
import { ApresentacaoService } from '../apresentacao.service';
// importando o servico que sera utilizado por esse componente....

@Component({
    selector: 'app-apresentacao-component',
    templateUrl: './apresentacao-component.component.html',
    styleUrls: ['./apresentacao-component.component.css']
})
export class ApresentacaoComponent implements OnInit {

  nomePortal : string;
  pokemons: string[];

  // o atributo privado "servico" faz com que ele seja automaticamente declarado
  // como atributo dessa classe "ApresentacaoComponent"....
  // é como se fizesse o seguinte:
  // this.servico = servico;
  constructor( private servico : ApresentacaoService ) { 
      // var buscarPokemons = new ApresentacaoService();
      // ao invés de instanciar um servico manualmente, 
      // pode-se chamá-lo ou instancia-lo automaticamente 
      // utilizando injecao de dependencia com o decorator "@injectable".... 

      this.nomePortal = 'http://loiane.training';

      this.pokemons = servico.getPokemons(); // acessando o servico via injecao de dependencia
  }

  ngOnInit(): void { }

}
