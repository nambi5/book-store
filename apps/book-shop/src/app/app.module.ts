import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UiModule } from '@book-store/ui';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { reducers, metaReducers } from './store/reducers';
import { BookEffects } from './store/effects/book.effects';
import { AppComponent } from './app.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BillingInfoComponent } from './billing-info/billing-info.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { MyCollectionComponent } from './my-collection/my-collection.component';

const routes: Routes = [
  { path: '', component: SearchPageComponent },
  { path: 'billingInfo', component: BillingInfoComponent },
  { path: 'cart', component: MyCartComponent },
  { path: 'collection', component: MyCollectionComponent },
  { path: ':id', component: BookDetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    BookDetailComponent,
    BillingInfoComponent,
    MyCartComponent,
    MyCollectionComponent,
  ],
  imports: [
    BrowserModule,
    UiModule,    
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([BookEffects]),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
