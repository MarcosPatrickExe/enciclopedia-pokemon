import { Component, OnInit } from '@angular/core';
// importando o servico que sera utilizado por esse componente....

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})


export class HeaderMenuComponent { //implements OnInit

  nomePortal :string;
  urlImagem :string = 'http://lorempixel.com/400/200/nature/';
  menuDropDownIsOpen :boolean = false;

  constructor(){
      this.nomePortal = 'http://loiane.training';
  }

  menuClicked(){
      this.menuDropDownIsOpen = !this.menuDropDownIsOpen;
    //  this.styleClassOpen = this.menuDropDownIsOpen ? "open" : "";  // formato com operador ternario
  }

  // evento acionado toda vez que a janela é redimensionada, o 'event' pode ter tipo redefinido
  resizeEvent(event :any ){
      console.log("window:resize event oject: "+event.constructor );  

      if(event.target.innerWidth > 500 && this.menuDropDownIsOpen ){
          this.menuDropDownIsOpen = false;
      }
  }
}
