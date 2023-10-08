import { Directive, ElementRef, Renderer2 } from '@angular/core';

//ElementRef eh uma classe q representa a ref de qualquer elemento ou tag html no DOM

@Directive({
  selector: '[appColorDirective]'
})
/*
  eh possivel aplicar diretivas para alguns componentes HTML especificos, como o 'p', 'h1', e em 
  outros componentes personalizaveis que criamos via codigo. 
*/


export class ColorDirectiveDirective {

            // inserindo injecao de dependencia com o ElementRef
  constructor( 
      private _elemRef : ElementRef,
      private _rend: Renderer2 ) {
              // ao realizar a injecao de depencia, automaticamente essa variavel ja se torna privada dentro da classe, 
              // alem disso essa variavel ira guardar a referencia do elemento HTML que tem essa diretiva adicionada na sua tag em "app.component.html"
              
     //  console.log("elementRef object: "+_elemRef);

     // _elemRef.nativeElement.style.backgroundColor = 'yellow';
     // no entanto o metodo acima oferece riscos a seguranca contra ataques web. Para evitar isso, usa-se o Renderer:

      this._rend.setStyle(_elemRef.nativeElement, "background-color", "yellow");
      //setando style direto num elemento DOM que use dessa diretiva
   }

}
