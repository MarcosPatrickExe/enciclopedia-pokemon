import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apresentacao-conteudo',
  templateUrl: './apresentacao-conteudo.component.html',
  styleUrls: ['./apresentacao-conteudo.component.css']
})

/* 
    ASSIM COMO É POSSIVEL FAZER O TEMPLATE LITERALS COM O 
    DECORATOR "templateUrl", TAMBÉM É POSSIVEL FAZER O MESMO
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




export class ApresentacaoConteudo { // implements OnInit 
/*
  ngOnInit(): void {
  }
  */
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
