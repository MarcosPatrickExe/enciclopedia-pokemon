import { Component } from '@angular/core';
import { HomeMenuService } from './home-menu.service';


@Component({
    selector: 'home-menu',
    templateUrl: './home-menu.component.html',
    styleUrls: ['./home-menu.component.scss']
})
/* 
    ASSIM COMO EH POSSIVEL FAZER O TEMPLATE LITERALS COM O 
    DECORATOR "templateUrl" => "template", TAMBEM EH POSSIVEL FAZER O MESMO
    COM O "styleUrls", COMO LOGO ABAIXO: 

    styles:[`
        .hightlight {
             background-color: yellow;
             font-weight: bold;

        }`
    ]

    // essa forma tbm eh aplicavel em diretivas!
*/
export class HomeMenuComponent {

    public pokemonsItens: string[];
    urlImage: string = "https://img.pokemondb.net/artwork/walrein.jpg"; //'http://lorempixel.com.br/600/200/pokémon/';
    public valorAtual: string = '100 reais';
    public componenteAtivado : boolean = true;
    public valorSalvo : string = '';
    public isMouseOver : boolean = false;
    public name : string = 'write anything...';
    active :boolean = false;
    fontsize :number = 20;

    
    public person : any = {
        name : "fernanda",
        age : 18
    }
    
    // o atributo privado "servico" faz com que ele seja automaticamente declarado
    // como atributo dessa classe "HomeMenuComponent"....
    // eh como se fizesse o seguinte:
    // this.servico = servico;
    constructor( private servico : HomeMenuService ) { 
    // let buscarPokemons = new HomeMenuService();
    // ao inves de instanciar um servico manualmente como em "this.nomePortal = new HomeMenuService()", 
    // pode-se chama-lo ou instancia-lo automaticamente 
    // utilizando injecao de dependencia com o decorator "@injectable".... 
        
      this.pokemonsItens = servico.getPokeItems(); // acessando o servico via injecao de dependencia
    }

    ifTrue() :boolean {
        return false;
    }
    
    getValor() :number {
        return 5000;
    }

    switchStyleClass( value :string) :string | null {
        // inserindo algumas opcoes básicas para o Select
        switch(value){
            case "Celebi":
                return "alert-success";
            case "Zapdos":
                return "alert-warning";
            case "Moltres":
                return "alert-danger";
            case "Articuno":
                return "alert-info";
        }

        return null;
    }

    botaoClicado(){
        alert('botao clicado!!');
    }


 // AO TIPAR O OBJETO DO EVENTO RECEBIDO EH ATIVADO A FERRAMENTA DE INTELI SENSE QUE PODERA EXIBIR AS PROPRIEDADES DESSE OBJETO
    inputClick( evento: KeyboardEvent){
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

    mouseOut( valorCampo: any ){
        alert("mouse fora do elemento!!!!"); 
        this.valorAtual = valorCampo;
    }


    btnClick( elementoInput: any ){
        alert("Botao clicado!!!"); 
        console.dir( (<HTMLInputElement> elementoInput).value );
    }

    onMouseOverOut(){
         this.isMouseOver = !this.isMouseOver;
    }


    getPokeItems(){
        return this.pokemonsItens;
    }
}
