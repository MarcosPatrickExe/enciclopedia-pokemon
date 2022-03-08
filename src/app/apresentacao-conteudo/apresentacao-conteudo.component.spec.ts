import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApresentacaoConteudoComponent } from './apresentacao-conteudo.component';

describe('ApresentacaoConteudoComponent', () => {
  let component: ApresentacaoConteudoComponent;
  let fixture: ComponentFixture<ApresentacaoConteudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApresentacaoConteudoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApresentacaoConteudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
