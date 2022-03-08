import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApresentacaoComponent } from './apresentacao-component/apresentacao-component.component';

import { ApresentacaoService } from './apresentacao-component/apresentacao.service';

@NgModule({
  declarations: [
    ApresentacaoComponent
  ],
  imports: [
    CommonModule //modulos secundarios importam esse "common module"
  ],
  exports: [
    ApresentacaoComponent //exportando o componente para que seja utilzado no modulo raiz (ou app.module)
  ],
  providers: [
    ApresentacaoService
  ]
})


export class ApresentacaoModule { }