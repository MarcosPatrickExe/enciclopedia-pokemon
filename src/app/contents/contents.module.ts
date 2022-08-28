import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTES
import { HomeMenuComponent } from './home-menu/home-menu.component';
//import { ComponenteTexto } from '../componente-texto/componente-texto.component';

// SERVICES
import { HomeMenuService } from './home-menu/home-menu.service';

@NgModule({
  declarations: [
    HomeMenuComponent
   // ComponenteTexto
  ],
  imports: [
    CommonModule //modulos secundarios importam esse "common module"
  ],
  exports: [
    HomeMenuComponent //exportando o componente para que seja utilzado no modulo raiz (ou app.module)
  ],
  providers: [
    HomeMenuService
  ]
})
export class ContentsModule { }
