import {  Component,  } from '@angular/core';
// importando o decorator "@Component"


 
// O decorator "@Component" eh responsavel por fornecer informacoes 
// sobre o componente para que o compilador possa ler
@Component({
    selector: 'app-root', // "app-root" eh um seletor que faz referebcia a tag <app-root> la no "index.html"
    templateUrl: './app.component.html', // aponta para o arquivo html do componente
    styleUrls: ['./app.component.scss'] // aponta para o arquivo de estilo do componente
})
export class AppComponent{

}
