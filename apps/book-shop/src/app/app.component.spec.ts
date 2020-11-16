import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { reducers, metaReducers } from './store/reducers';
import {UiModule} from '@book-store/ui';
import { RouterTestingModule } from '@angular/router/testing';
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports:[
        StoreModule.forRoot(reducers, { metaReducers }),
        UiModule,RouterTestingModule
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain(
  //     'Welcome to book-shop!'
  //   );
  // });
});
