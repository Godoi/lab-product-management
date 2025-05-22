import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import * as CategoryActions from './category.actions';
import { CategoryService } from '../../core/services/category.service';

@Injectable()
export class CategoryEffects {
  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoryActions.loadCategories),
      switchMap(() =>
        this.categoryService.getCategories().pipe(
          map(categories => CategoryActions.loadCategoriesSuccess({ categories })),
          catchError(error => of(CategoryActions.loadCategoriesFailure({ error })))
        )
      )
    )
  );

  loadCategoryById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoryActions.loadCategoryById),
      switchMap((action) =>
        this.categoryService.getCategoryById(action.id).pipe(
          map(category => CategoryActions.loadCategoryByIdSuccess({ category })),
          catchError(error => of(CategoryActions.loadCategoryByIdFailure({ error }))
        )
      )
     )
    )
  );

  constructor(
    private actions$: Actions,
    private categoryService: CategoryService
  ) {}
}
