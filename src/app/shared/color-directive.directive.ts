import { Directive, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core';

//ElementRef eh uma classe q representa a ref de qualquer elemento ou tag html no DOM

@Directive({
  selector: '[appColorDirective]'
})
/*
  eh possivel aplicar diretivas para alguns componentes HTML especificos, como o 'p', 'h1', e em 
  outros componentes personalizaveis que criamos via codigo. Ex:

  selector: 'p[appColorDirective]' ou
  selector: 'h1[appColorDirective]' ou
  selector: 'div[appColorDirective]'
*/

export class ColorDirectiveDirective {

            // realizando a injecao de dependencia com o ElementRef
  constructor( 
      private _elemRef : ElementRef,
      private _rend: Renderer2 ) {
              // ao realizar a injecao de depencia, automaticamente essa variavel ja se torna privada dentro da classe, 
              // alem disso essa variavel ira guardar a referencia do elemento HTML que tem essa diretiva adicionada na sua tag em "app.component.html"
              
      //  console.log("elementRef object: "+_elemRef);

      // _elemRef.nativeElement.style.backgroundColor = 'yellow';
      // no entanto o metodo acima oferece riscos para a seguranca, facilitando contra ataques web. Para evitar isso, usa-se o Renderer:

        console.log(_elemRef);
        this._rend.setStyle(_elemRef.nativeElement, "background-color", "yellow");
        //setando style direto num elemento DOM que use dessa diretiva
   }



  // esse decorator permite fazer a associacao entre a propriedade essa 
  // propriedade "backgroundColor" da classe com o atributo CSS da tag html 
  // hospedeira dessa diretiva
  @HostBinding("style.backgroundColor")
  private backgroundColor?: string;


  // outro metodo de definir o HostListener eh definindo o mesmo afrente da assinatura do metodo, como abaixo:
  @HostListener('click') mouseClick() :void{
      alert("Host Listener detected a mouse click over!");
      this.backgroundColor = "gray";
  }

  // caso seja necessario realizar a manipulacao do valor do 'backgroundColor', use o metodo abaixo ao inves da propriedade acima
  @HostBinding('style.backgroundColor') get getColor(){
      return this.backgroundColor;
  }
}
