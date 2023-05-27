import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';


describe('AppComponent', () => {
  beforeEach(async () => {
    //addProviders([AppComponent]);

    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderMenuComponent // resolving a follow error 'app-header-menu' is not a known element
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'introducao-angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('introducao-angular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('introducao-angular app is running!');
  });
});
