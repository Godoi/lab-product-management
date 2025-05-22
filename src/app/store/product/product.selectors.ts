import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './product.reducer';

// Feature selector - seleciona todo o estado de produto
export const selectProductState = createFeatureSelector<State>('product');

// Seleciona a lista de produtos
export const selectAllProducts = createSelector(
  selectProductState,
  (state) => state.products
);

// Seleciona o estado de loading
export const selectLoading = createSelector(
  selectProductState,
  (state) => state.loading
);

// Seleciona possíveis erros
export const selectError = createSelector(
  selectProductState,
  (state) => state.error
);
