import { Component, OnInit } from '@angular/core';
// importando o servico que sera utilizado por esse componente....

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})

export class HeaderMenuComponent  { //implements OnInit

  nomePortal :string;
  urlImagem :string = 'http://lorempixel.com/400/200/nature/';

  constructor() { 
      this.nomePortal = 'http://loiane.training';
  }

  //ngOnInit(): void { }

}
