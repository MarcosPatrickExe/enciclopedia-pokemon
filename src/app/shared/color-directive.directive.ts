import { Directive, ElementRef } from '@angular/core';

//ElementRef eh uma classe q representa a ref de qualquer elemento ou tag html no DOM

@Directive({
  selector: '[appColorDirective]'
})
export class ColorDirectiveDirective {

            // inserindo injecao de dependencia com o ElementRef
  constructor( private _elemRef : ElementRef) {
              // ao realizar a injecao de depencia, automaticamente essa variavel ja se torna privada dentro da classe, 
              // alem disso essa variavel ira guardar a referencia do elemento HTML que tem essa diretiva adicionada na sua tag em "app.component.html"
              
      console.log("elementRef object: "+_elemRef);

      _elemRef.nativeElement.style.backgroundColor = 'yellow';
   }

}
