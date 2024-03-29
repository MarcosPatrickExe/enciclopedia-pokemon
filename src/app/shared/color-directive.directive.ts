import { Directive, ElementRef, Renderer2, HostBinding, HostListener, Input } from '@angular/core';

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


    @Input() public defaultColor :string;
    @Input() public highlightColor :string;




    // esse decorator permite fazer a associacao entre a propriedade essa 
    // propriedade "backgroundColor" da classe com o atributo CSS da tag html 
    // hospedeira dessa diretiva
    @HostBinding("style.backgroundColor")
    private backgroundColor?: string;


    @HostListener('mouseenter') mouseEnterFunc() :void{
        this.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave') mouseLeaveFunc() :void{
        this.backgroundColor = this.defaultColor;
    }

    // caso seja necessario realizar a manipulacao do valor do 'backgroundColor', use o metodo abaixo ao inves da propriedade acima
    @HostBinding('style.backgroundColor') get getColor(){
        return this.backgroundColor;
    }
    
    // o metodo abaixo eh um dos life-cycle hooks
    ngOnInit(){
        this.backgroundColor = this.defaultColor;
    }
}
