import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { UiModule } from '@book-store/ui';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { environment } from '../environments/environment';
import * as fromBook from './state/reducers/book.reducer';
import { BookEffects } from './state/effects/book.effects';
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
    MatGridListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
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
    EffectsModule.forRoot([BookEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forFeature(fromBook.bookFeatureKey, fromBook.reducer),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
