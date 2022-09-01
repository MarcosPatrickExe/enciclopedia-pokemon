import { Component, OnInit } from '@angular/core';
import { HomeMenuService } from './home-menu.service';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.css']
})
/* 
    ASSIM COMO � POSSIVEL FAZER O TEMPLATE LITERALS COM O 
    DECORATOR "templateUrl" => "template", TAMB�M � POSSIVEL FAZER O MESMO
    COM O "styleUrls", COMO LOGO ABAIXO: 

    styles:[`
        .hightlight {
             background-color: yellow;
             font-weight: bold;

        }`
    ]
*/
export class HomeMenuComponent {

    public pokemons: string[];
    public urlImage: string = 'http://lorempixel.com.br/600/200/pokémon/';
    public valorAtual: string = '100 reais';
    public componenteAtivado : boolean = true;
    public valorSalvo : string = '';
    public isMouseOver : boolean = false;
    public name : string = 'write anything...';

    public person : any = {
        name : "fernanda",
        age : 18
    }
    
    // o atributo privado "servico" faz com que ele seja automaticamente declarado
    // como atributo dessa classe "HomeMenuComponent"....
    // � como se fizesse o seguinte:
    // this.servico = servico;
    constructor( private servico : HomeMenuService ) { 
     // let buscarPokemons = new HomeMenuService();
      // ao inv�s de instanciar um servico manualmente como em "this.nomePortal = new HomeMenuService()", 
      // pode-se cham�-lo ou instancia-lo automaticamente 
      // utilizando injecao de dependencia com o decorator "@injectable".... 
        
      this.pokemons = servico.getPokemons(); // acessando o servico via injecao de dependencia
    }

    ifTrue():boolean {
        return false;
    }
   
    getValor():number {
        return 5000;
    }

    botaoClicado(){
        alert('botao clicado!!');
    }


    inputClick( evento: KeyboardEvent){ // AO TIPAR O OBJETO DO EVENTO RECEBIDO EH ATIVADO A FERRAMENTA DE INTELI SENSE QUE PODERA EXIBIR AS PROPRIEDADES DESSE OBJETO
      console.log( 
        (<HTMLInputElement> evento.target) // CONVERTENDO UM OBJETO DO TIPO "EventTarget" 
              // para o tipo da interface "<HTMLInputElement>" 
              // para assim, poder acessar o atributo 'value'
                  .value 
      );
    
      // O ATRIBUTO 'target' APONTA PARA UMA TAG DO HTML (ex: body, head, h1, input, etc....)
      // ESSAS TAGS NATIVAS DO HTML FORAM TIPADAS NO TYPESCRIPT!

      this.valorAtual = (<HTMLInputElement> evento.target).value;
      // CONVERTENDO UM OBJETO DO TIPO "EventTarget" para o tipo da interface "HTMLInputElement"
    }

    salvarValor( vSalvo : string ){
        this.valorSalvo = vSalvo; 
    }

    mouseOut(valorCampo: any){
        alert("mouse fora do elemento!!!!");
        this.valorAtual = valorCampo;
    }


    btnClick(elementoInput: any){ 
        alert("Botao clicado!!!"); 
        console.dir( (<HTMLInputElement> elementoInput).value );
    }

    onMouseOverOut(){
         this.isMouseOver = !this.isMouseOver;
    }

}