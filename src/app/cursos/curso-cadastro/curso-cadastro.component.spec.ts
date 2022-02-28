import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoCadastroComponent } from './curso-cadastro.component';

describe('CursoCadastroComponent', () => {
  let component: CursoCadastroComponent;
  let fixture: ComponentFixture<CursoCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
