import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LOCALE_ID, NgModule } from '@angular/core';
import { ContentsModule } from '../../contents/contents.module';

// TODOS OS COMPONENTES QUE VC CRIAR DEVEM SER IMPORTADOS NESSE ARQUIVO 
// A PARTIR DO NOME DA CLASSE QUE FOI EXPORTADA

//import { ComponenteTexto } from './componente-texto/componente-texto.component';
import { HeaderMenuService } from '../../header-menu/header-menu.service';
import { ColorDirectiveDirective } from '../../shared/color-directive.directive';
import { HostListenerDirective } from '../../shared/host-listener.directive';
import { NgElseDirective } from '../../shared/ng-else.directive';


@NgModule({
  declarations: [
     HomeComponent,
     // ComponenteTexto
     ColorDirectiveDirective,
     HostListenerDirective,
     NgElseDirective,
  ],
  imports: [
     CommonModule,
     ContentsModule
  ],
  providers: [
     HeaderMenuService
  ]
})
export class HomeModule { }
