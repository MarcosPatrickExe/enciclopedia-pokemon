import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';

// COMPONENTES
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { ComponenteTexto } from '../componente-texto/componente-texto.component';

// SERVICES
import { HomeMenuService } from './home-menu/home-menu.service';
import { ViewPokemonComponent } from './view-pokemon/view-pokemon.component';

@NgModule({
  declarations: [
    HomeMenuComponent,
    ComponenteTexto, /*tbm eh possivel utilizar um componente que esteja em outra pasta. Mas isso nao eh uma boa pratica! */
    ViewPokemonComponent
  ],
  imports: [
    CommonModule,  //modulos secundarios importam esse "common module"
    FormsModule              
  ],
  exports: [
    HomeMenuComponent, //exportando o componente para que seja utilzado no modulo raiz (ou app.module)
    ViewPokemonComponent
  ],
  providers: [
    HomeMenuService
  ]
})
export class ContentsModule { }
