import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContentsModule } from './contents/contents.module';

// TODOS OS COMPONENTES QUE VC CRIAR DEVEM SER IMPORTADOS NESSE ARQUIVO 
// A PARTIR DO NOME DA CLASSE QUE FOI EXPORTADA
import { AppComponent } from './app.component'; 
import { HeaderMenuService } from './header-menu/header-menu.service';
import Routing from './app.routes';
import { HomeModule } from './pages/home/home.module';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundPageComponent } from './pages/not-found/not-found-page.component';
//import { ComponenteTexto } from './componente-texto/componente-texto.component';


@NgModule({
  declarations: [ //Area destinada somente aos componentes, diretivas e pipes que irão receber os seletores dos componentes do modulo importado chamado 'ContentsModule'
     AppComponent,
     HeaderMenuComponent,
     LoginComponent,
     AboutComponent,
     NotFoundPageComponent,
  ],
  imports: [ // adi
     BrowserModule, //somnente o modulo raiz do projeto importa esse modulo
     HomeModule,
     Routing,
   ],
  providers: [ // area destinada somente aos services que serao visiveis somente para os componentes declarados, ou seja serao globais a aplicacao
     HeaderMenuService,   
  ], 
  bootstrap: [AppComponent] // componente principal
})

export class AppModule { }