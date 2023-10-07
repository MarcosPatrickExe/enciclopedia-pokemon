import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorDirective]'
})
export class ColorDirectiveDirective {

            // inserindo injecao de dependencia com o ElementRef
  constructor( private _elemRef : ElementRef) {
              // ao realizar a injecao de depencia, automaticamente essa variavel ja se torna privada dentro da classe
              

   }

}
