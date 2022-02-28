import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoCadastroComponent } from './curso-cadastro/curso-cadastro.component';

@NgModule({
  declarations: [
    CursoCadastroComponent
  ],
  imports: [
    CommonModule //modulos secundarios importam esse "common module"
  ],
  exports: [
    CursoCadastroComponent
  ]
})


export class CursosModule { }