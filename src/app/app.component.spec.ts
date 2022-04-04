import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateFakeLoader, TranslateLoader, TranslateModule ,TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        TranslateService
      ]
    }).compileComponents();
  });

  function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader  {
    return new TranslateHttpLoader(http);
  }

  // propertys needed for testings
  function setup() {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.debugElement.componentInstance;
    const translateService = TestBed.inject(TranslateService);

    return { fixture, component,  translateService };
  }

  it('should create the app', () => {
    const { component } = setup();
    expect(component).toBeTruthy();
  });

  it(`should have as title 'movies-poc'`, () => {
    const { component } = setup();
    expect(component.title).toEqual('movies-poc');
  });

  it(`should call classToggle'`, () => {
    const { component } = setup();

    component.classToggle();
    expect(component.showNavItems).toBeTruthy();
  });

});
