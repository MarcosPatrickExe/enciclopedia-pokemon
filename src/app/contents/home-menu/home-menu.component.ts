import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.css']
})
/* 
    ASSIM COMO � POSSIVEL FAZER O TEMPLATE LITERALS COM O 
    DECORATOR "templateUrl", TAMB�M � POSSIVEL FAZER O MESMO
    COM O "styleUrls", COMO LOGO ABAIXO: 

    styles:[
       `
        .hightlight {
             background-color: yellow;
             font-weight: bold;

        }
       `
    ]

*/
export class HomeMenuComponent { // implements OnInit {

    constructor() { }
    //ngOnInit(): void {}

    
    valorAtual: string = '';

    inputClick(evento: KeyboardEvent){
      /*
      console.log( 
              (<HTMLInputElement> evento.target) 
              // CONVERTENDO UM OBJETO DO TIPO "EventTarget" para o tipo da interface "HTMLInputElement"
                  .value 
        );
        */

        this.valorAtual = (<HTMLInputElement> evento.target).value;
        // CONVERTENDO UM OBJETO DO TIPO "EventTarget" para o tipo da interface "HTMLInputElement"
    }


    mouseOut(valorCampo: any){
        alert("mouse fora do elemento!!!!");
        this.valorAtual = valorCampo;
    }


    btnClick(elementoInput: any){ 
        alert("Botao clicado!!!"); 
        console.dir( (<HTMLInputElement> elementoInput) );
    }

}
