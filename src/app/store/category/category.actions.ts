import { createAction, props } from '@ngrx/store';
import { Category } from '../../shared/models/category.model';

export const loadCategories = createAction('[Category] Load Categories');
export const loadCategoriesSuccess = createAction(
  '[Category] Load Categories Success',
  props<{ categories: Category[] }>()
);
export const loadCategoriesFailure = createAction(
  '[Category] Load Categories Failure',
  props<{ error: any }>()
);

export const loadCategoryById = createAction(
  '[Category] Load Category by ID',
  props<{ id: number }>()
);

export const loadCategoryByIdSuccess = createAction(
  '[Category] Load Category by ID Success',
  props<{ category: Category }>()
);

export const loadCategoryByIdFailure = createAction(
  '[Category] Load Category by ID Failure',
  props<{ error: any }>()
);

// CRUD
export const createCategory = createAction(
  '[Category] Create Category',
  props<{ category: Category }>()
);
export const updateCategory = createAction(
  '[Category] Update Category',
  props<{ category: Category }>()
);
export const deleteCategory = createAction(
  '[Category] Delete Category',
  props<{ id: number }>()
);
