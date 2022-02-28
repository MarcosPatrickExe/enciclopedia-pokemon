import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ComponenteTexto} from './testando-componentes/componente-texto.component';

import { CursosModule } from './cursos/cursos.module';

// TODOS OS COMPONENTES QUE VC CRIAR DEVEM SER IMPORTADOS NESSE ARQUIVO 
// A PARTIR DO NOME DA CLASSE QUE FOI EXPORTADA
import { AppComponent } from './app.component'; 

@NgModule({
  declarations: [
     AppComponent,
     ComponenteTexto
  ],
  imports: [
     BrowserModule, //somnente o modulo raiz do projeto importa esse modulo
     CursosModule // importando o modulo do arquivo "cursos.module.ts"
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }