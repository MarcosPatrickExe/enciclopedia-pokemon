import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContentsModule } from './contents/contents.module';

// TODOS OS COMPONENTES QUE VC CRIAR DEVEM SER IMPORTADOS NESSE ARQUIVO 
// A PARTIR DO NOME DA CLASSE QUE FOI EXPORTADA
import { AppComponent } from './app.component'; 
import { ComponenteTexto } from './componente-texto/componente-texto.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';

@NgModule({
  declarations: [ //Area destinada somente aos componentes, diretivas e pipes
     AppComponent,
     ComponenteTexto,
     HeaderMenuComponent
  ],
  imports: [ // adi
     BrowserModule, //somnente o modulo raiz do projeto importa esse modulo
     ContentsModule // importando o modulo do arquivo "content.module.ts", logo, nao precisa importa o componente que esta dentro dele, como o "home-menu.component"
   ],
  providers: [], // area destinada somente aos services que serao visiveis somente para os componentes declarados, ou seja serao globais a aplicacao
  bootstrap: [AppComponent] // componente principal
})

export class AppModule { }