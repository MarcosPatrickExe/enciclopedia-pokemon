import { Directive } from '@angular/core';

@Directive({
  selector: '[ngElsee]'
})
export class NgElseDirective {

  constructor() { }

  public showAtributes :boolean =true;


  changeCoursesMode(){
     this.showAtributes = !this.showAtributes;
  }


}
