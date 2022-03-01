import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ApresentacaoModule } from './apresentacao/apresentacao.module';

// TODOS OS COMPONENTES QUE VC CRIAR DEVEM SER IMPORTADOS NESSE ARQUIVO 
// A PARTIR DO NOME DA CLASSE QUE FOI EXPORTADA
import { AppComponent } from './app.component'; 
import { ComponenteTexto } from './testando-componentes/componente-texto.component';

@NgModule({
  declarations: [ //Area destinada somente aos componente
     AppComponent,
     ComponenteTexto
  ],
  imports: [
     BrowserModule, //somnente o modulo raiz do projeto importa esse modulo
     ApresentacaoModule // importando o modulo do arquivo "cursos.module.ts"
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }