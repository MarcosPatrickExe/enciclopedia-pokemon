import { Directive, HostListener} from '@angular/core';
// O HostListener permite 'escutar' um elemento HTML ao qual essa diretiva esta atrelada


@Directive({
  selector: '[hostListener]'
})
export class HostListenerDirective {


  @HostListener('mouseenter', ['isDragged']) 
  mouseDragOverDetect( isDrag :string) :void{
      alert("Host Listener detected a mouse dragged over!!!!  Valor do parametro recebido: "+isDrag);
  }

  constructor() { 

  }

}
