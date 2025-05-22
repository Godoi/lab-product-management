import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { Product } from '../../shared/models/product.model';

import * as CategoryActions from '../../store/category/category.actions';
import * as CategorySelectors from '../../store/category/category.selectors';
import * as ProductSelectors from '../../store/product/product.selectors';

import { EntityListComponent } from '../../shared/components/entity-list/entity-list.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  standalone: true,
  imports: [
    EntityListComponent,
    AsyncPipe
  ],
})
export class CategoryDetailPageComponent {
  private route = inject(ActivatedRoute);

  constructor(private store: Store) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.category$ = this.store.select(CategorySelectors.selectCategoryById(id));
  }

  categoryId$: Observable<number> = this.route.params.pipe(
    map(params => Number(params['id']))
  );

  category$ = this.categoryId$.pipe(
    switchMap(id => {
      this.store.dispatch(CategoryActions.loadCategoryById({ id }));
      return this.store.select(CategorySelectors.selectCategoryById(id));
    })
  );

productsInCategory$: Observable<Product[]> = this.categoryId$.pipe(
  switchMap(id =>
    this.store.select(ProductSelectors.selectAllProducts).pipe(
      map(products => ({
        products,
        id
      }))
    )
  ),
  map(({ products, id }) => products.filter(p => p.categoryId === id))
);
}
