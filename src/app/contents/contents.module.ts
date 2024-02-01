import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';

// COMPONENTES
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { ComponenteTextoComponent } from '../componente-texto/componente-texto.component';

// SERVICES
import { HomeMenuService } from './home-menu/home-menu.service';
import { ViewPokemonComponent } from './view-pokemon/view-pokemon.component';
import { CamelCasePipePipe } from './camel-case-pipe.pipe';
import { PipeFilterArrayPipe } from './view-pokemon/pipe-filter-array.pipe';


@NgModule({
  declarations: [
    HomeMenuComponent,
    ComponenteTextoComponent, /*tbm eh possivel utilizar um componente que esteja em outra pasta. Mas isso nao eh uma boa pratica! */
    ViewPokemonComponent, 
    CamelCasePipePipe, 
    PipeFilterArrayPipe
  ],
  imports: [
    CommonModule,  //modulos secundarios importam esse "common module"
    FormsModule              
  ],
  exports: [
    HomeMenuComponent, //exportando o componente para que seja utilzado no modulo raiz (ou app.module)
    ViewPokemonComponent,
    ComponenteTextoComponent
  ],
  providers: [
    HomeMenuService,
    { // inserindo um objeto que vai ser servido para toda a aplicacao:
        provide: LOCALE_ID, // "LOCALE_ID" funciona como um token, ou seja um identificador 
        useValue: 'pt', // passando o token com o locale
     /* useClass:  // 'useClass' eh um atributo/chave opcional que ira servir para identificar a classe do 
        service q sera utilizado, semelhante a classe de servico que declaramos no construtor do componente ao fazer 
        a injecao de depedencia */
     // por padrao, 'useValue' tem o seguinte o valor: 'en-US'


     // factory: 
     // tbm eh possivel utilizaro padrao 'factory' no qual eh definido um comportamente q
     // vc precisa e sera solicitada a sua utilizacao
     //  useFactory: (settingsService :any) => settingsService.getLocale(),
    }  
  ]
})
export class ContentsModule { }
