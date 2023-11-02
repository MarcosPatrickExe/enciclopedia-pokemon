import { Directive, HostListener, HostBinding, ElementRef, Renderer2} from '@angular/core';
// O 'HostListener' permite 'escutar' um elemento HTML ao qual essa diretiva esta atrelada


@Directive({
  selector: '[hostListener]'
})
export class HostListenerDirective {

  constructor(
      private _elemRef: ElementRef,
      private _rend :Renderer2
  ){ }


  // o 'HostListener' associa qualquer tipo de evento com um método que, 
  // por sua vez eh associado à elemento html ao qual essa diretiva esteja atreladsa
  @HostListener('mouseout', ['isDragged'] )
  mouseDragOverDetect( isDrag :string) :void{
    
      this._rend.setStyle(
           this._elemRef.nativeElement,
           'background-color',  // property
           'blue' // color
      );

      this._rend.setProperty(
           this._elemRef.nativeElement,
           'display',
           'block'
      );
  }

  @HostListener('mouseenter') onMouseEnter(){
       this._rend.setStyle(
            this._elemRef.nativeElement, // utilizando o "_elementRef" que foi instanciado e enviado para o construtor dessa classe
            'background-color',
            'red'
       );
  }



  // outro metodo de definir o HostListener eh definindo o mesmo afrente da assinatura do metodo, como abaixo:
  @HostListener('click') mouseClick() :void{
      alert("Host Listener detected a mouse click over!");

      this.backgroundColor = "gray";
  }
  
  // caso seja necessario realizar a manipulacao dovalor do 'backgroundColor', use o metodo abaixo ao inves da propriedade acima
 /*
  @HostListener('style.backgroundColor') get getColor(){
      return this.backgroundColor;
  }
*/


  // esse decorator permite fazer a associacao entre a propriedade da classe e o atributo CSS
  @HostBinding("style.backgroundColor")
  private backgroundColor?: string;
}

/* OBSERVACAO!!

AS DIRETIVAS PADROES DO ANGULAR PODEM SER SEPARADAS EM DOIS GRUPOS:

ESTRUTURAIS:
*NgFor, *NgIf e *NgSwitch
 
ATRIBUTOS:
NgClass e NgStyle
*/
