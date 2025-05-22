import { createReducer, on } from '@ngrx/store';
import * as CategoryActions from './category.actions';
import { Category } from '../../shared/models/category.model';

export interface CategoryState {
  categories: Category[];
  loading: boolean;
  error: any;
}

const initialState: CategoryState = {
  categories: [],
  loading: false,
  error: null,
};

export const categoryReducer = createReducer(
  initialState,
  on(CategoryActions.loadCategories, (state) => ({ ...state, loading: true })),
  on(CategoryActions.loadCategoriesSuccess, (state, { categories }) => ({
    ...state,
    categories,
    loading: false,
  })),

  on(CategoryActions.loadCategoryByIdSuccess, (state, { category }) => {
    const exists = state.categories.find(c => c.id === category.id);
    if (exists) {
      return {
        ...state,
        categories: state.categories.map(c => c.id === category.id ? category : c),
        loading: false,
      };
    } else {
      return {
        ...state,
        categories: [...state.categories, category],
        loading: false,
      };
    }
  })
);
