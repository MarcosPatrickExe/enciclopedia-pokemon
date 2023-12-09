import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
// 'TemplateRef' faz referencia a propria tag 'template' definida em 'app.component.html'
// e 'ViewContainer' faz referencia ao conteudo/tag dentro dessa tag template 

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {// criando uma diretiva nao estruturada, ou seja, para usa-la, eh necessario chamar o 'template'
  

 // o 'set' permite escute o input da propriedade 'ngElse', executando o metodo 'set'
  @Input() set ngElse(condition :boolean){
      if(!condition)
        this._viewContainerRef.createEmbeddedView<any>(this._tempRef); // renderizando a view/tag html embutida na tag dessa diretiva la em 'app.component.html'
      else
        this._viewContainerRef.clear();
  };
  // 'condition' eh o valor boolean atribuido ao input property "ngElse" no componente "Button" no html template 'app.component.html'


  public changeCoursesMode(){
     this.ngElse = !this.ngElse;
  }


  // realizando injecao de dependencia, ou seja, inicializando variaveis privadas para as 2 classes importadas:
  constructor( 
      private _tempRef :TemplateRef< any >, // 'any' indica que o template ira ser empregado em qualquer tipo de tag
      private _viewContainerRef: ViewContainerRef
  ) { 
  }


}