import { Directive, HostListener, ElementRef, Renderer2} from '@angular/core';
// O 'HostListener' permite 'escutar' um elemento HTML ao qual essa diretiva esta atrelada


@Directive({
  selector: '[hostListener]'
})
export class HostListenerDirective {


  @HostListener('mouseenter', ['isDragged']) 
  mouseDragOverDetect( isDrag :string) :void{
      alert("Host Listener detected a mouse dragged over!!!!  Valor do parametro recebido: "+isDrag);

      this._rend.setProperty(
         this._elemRef,
         'display','block'
      );
  }


  constructor(
      private _elemRef: ElementRef,
      private _rend :Renderer2
  ){ }
}
