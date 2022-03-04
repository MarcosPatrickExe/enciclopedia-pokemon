import { Component } from '@angular/core';
// importando o decorator "@Component"


// O decorator "@Component" é responsável por fornecer informações 
// sobre o componente para que o compilador possa ler
@Component({
    selector: 'app-root', // "app-root" é um seletor que faz referebcia a tag <app-root> la no "index.html"
    templateUrl: './app.component.html', // aponta para o arquivo html do componente
    styleUrls: ['./app.component.css'] // aponta para o arquivo CSS do componente
})
export class AppComponent {

    cursos: string[]; //declarando o atributo

    //declarando e inicializando atributo
    title : string = 'Esse eh um titulo escrito da classe AppComponent'; // texto que ira aparecer na tela inicial
    nomeSite: string = 'http://loiane.training';  //declarando e inicializando atributo
    tamanhoNome : number;

    constructor(){
        this.cursos = ['Java', 'Python' ,'PHP', 'JavaScript'];
        this.tamanhoNome = this.nomeSite.length;

     //   var servico = new 
    }

}
