import { Component, OnInit, HostListener } from '@angular/core';
// importando o servico que sera utilizado por esse componente....

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})


export class HeaderMenuComponent{ //implements OnInit

  nomePortal :string;
  urlImagem :string = 'http://lorempixel.com/400/200/nature/';
  menuDropDownIsOpen :boolean = false;
  innerWidth :number;

  constructor(){
      this.nomePortal = 'http://loiane.training';
  }

  menuClicked(){
      this.menuDropDownIsOpen = !this.menuDropDownIsOpen;
    //  this.styleClassOpen = this.menuDropDownIsOpen ? "open" : "";  // formato com operador ternario
  }

  // evento acionado toda vez que a janela é redimensionada, o 'event' pode ter tipo redefinido
  resizeEvent( event :any ){
      console.log(`window:resize event oject:  type of event ${event} `+event.constructor );  

      if(event.target.innerWidth > 500 && this.menuDropDownIsOpen ){
          this.menuDropDownIsOpen = false;
      }
  }

  @HostListener('window:resize', ['$event'])
  onResize( event :any ) {
      this.innerWidth = window.innerWidth;
  }
}
