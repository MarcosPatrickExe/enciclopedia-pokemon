import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContentsModule } from './contents/contents.module';

// TODOS OS COMPONENTES QUE VC CRIAR DEVEM SER IMPORTADOS NESSE ARQUIVO 
// A PARTIR DO NOME DA CLASSE QUE FOI EXPORTADA
import { AppComponent } from './app.component'; 
//import { ComponenteTexto } from './componente-texto/componente-texto.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';

import { HeaderMenuService } from './header-menu/header-menu.service';
import { ColorDirectiveDirective } from './shared/color-directive.directive';
import { HostListenerDirective } from './shared/host-listener.directive';
import { NgElseDirective } from './shared/ng-else.directive';



@NgModule({
  declarations: [ //Area destinada somente aos componentes, diretivas e pipes que irão receber os seletores dos componentes do modulo importado chamado 'ContentsModule'
     AppComponent,
   //  ComponenteTexto,
     HeaderMenuComponent,
     ColorDirectiveDirective,
     HostListenerDirective,
     NgElseDirective
  ],
  imports: [ // adi
     BrowserModule, //somnente o modulo raiz do projeto importa esse modulo
     ContentsModule // importando o modulo do arquivo "content.module.ts", logo, nao precisa importa o componente que esta dentro dele, como o "home-menu.component"
  ],
  providers: [HeaderMenuService], // area destinada somente aos services que serao visiveis somente para os componentes declarados, ou seja serao globais a aplicacao
  bootstrap: [AppComponent] // componente principal
})

export class AppModule { }