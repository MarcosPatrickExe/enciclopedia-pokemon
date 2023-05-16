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
  styleClassIsOpen :string = "";

  constructor() { 
      this.nomePortal = 'http://loiane.training';
  }


  menuClicked(){
      this.menuDropDownIsOpen = !this.menuDropDownIsOpen;
      this.styleClassIsOpen = this.menuDropDownIsOpen ? "open" : "";
  }

  //ngOnInit(): void { }

}
