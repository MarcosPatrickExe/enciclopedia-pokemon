import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apresentacao-conteudo',
  templateUrl: './apresentacao-conteudo.component.html',
  styleUrls: ['./apresentacao-conteudo.component.css']
})
export class ApresentacaoConteudo implements OnInit {

  valorAtual: string = '';

  ngOnInit(): void {
  }

  btnClick(evento: Event){ 
      alert("Botao clicado!!!!!"); 
  }

  inputClick(evento: KeyboardEvent){
      console.log( 
            (<HTMLInputElement> evento.target) 
            // CONVERTENDO UM OBJETO DO TIPO "EventTarget" para o tipo da interface "HTMLInputElement"
                 .value 
      );

      this.valorAtual = (<HTMLInputElement> evento.target).value;
      // CONVERTENDO UM OBJETO DO TIPO "EventTarget" para o tipo da interface "HTMLInputElement"
  }


}
