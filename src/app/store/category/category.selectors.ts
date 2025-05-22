import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Category } from '../../shared/models/category.model';

export interface CategoryState {
  categories: Category[];
  loading: boolean;
  error: any;
}

export const selectCategoryState = createFeatureSelector<CategoryState>('category');

export const selectAllCategories = createSelector(
  selectCategoryState,
  (state) => state.categories
);

export const selectCategoryById = (categoryId: number) =>
  createSelector(selectAllCategories, (categories) =>
    categories.find((category) => category.id === categoryId)
  );

export const selectCategoryLoading = createSelector(
  selectCategoryState,
  (state) => state.loading
);

export const selectCategoryError = createSelector(
  selectCategoryState,
  (state) => state.error
);
