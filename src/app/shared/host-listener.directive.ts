import { Directive, HostListener, ElementRef, Renderer2} from '@angular/core';
// O 'HostListener' permite 'escutar' um elemento HTML ao qual essa diretiva esta atrelada


@Directive({
  selector: '[hostListener]'
})
export class HostListenerDirective {


  @HostListener('mouseout', ['isDragged'] )
  mouseDragOverDetect( isDrag :string) :void{
      alert("Host Listener detected a mouse dragged out!!!!  Valor do parametro recebido: "+isDrag);

      this._rend.setStyle(
           this._elemRef.nativeElement,
           'background-color',  // property
           'blue' // color
      );

      this._rend.setProperty(
           this._elemRef.nativeElement,
           'display',
           'block'
      )
  }

  // outro metodo de definir o HostListener eh definindo o mesmo afrente da assinatura do metodo, como abaixo:
  @HostListener('click') mouseClick() :void{
      alert("Host Listener detected a mouse click over!");

      this._rend.setProperty(
           this._elemRef.nativeElement,
          'display','none'
      );
  }


  constructor(
      private _elemRef: ElementRef,
      private _rend :Renderer2
  ){ }
}
