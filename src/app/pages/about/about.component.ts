import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() {
     this.cursos = ['Java', 'Python' ,'PHP', 'JavaScript'];
  }

  //declarando e inicializando atributo
  title :string = "introducao-angular";
  cursos: string[]; //declarando o atributo
  nomeSite: string = 'http://loiane.training';  //declarando e inicializando atributo

  ngOnInit(): void {
  }

}
