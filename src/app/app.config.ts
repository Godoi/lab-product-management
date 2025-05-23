import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import routes from './app.routes';
import { productReducer } from './store/product/product.reducer';
import { ProductEffects } from './store/product/product.effects';


export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideStore({ product: productReducer }),
    provideEffects([ProductEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  ]

};
