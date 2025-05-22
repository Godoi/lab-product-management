import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

// Models
import { Category } from '../../shared/models/category.model';
import { Product } from '../../shared/models/product.model';

// Store
import * as CategoryActions from '../../../store/category/category.actions';
import * as CategorySelectors from '../../../store/category/category.selectors';
import * as ProductActions from '../../store/product/product.actions';
import * as ProductSelectors from '../../store/product/product.selectors';

// Components
import { EntityListComponent } from '../../shared/components/entity-list/entity-list.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  standalone: true,
  imports: [
    EntityListComponent,
  ],
})
export class CategoryDetailPageComponent {
  private route = inject(ActivatedRoute);
  private store = inject(Store);

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
    switchMap(id => this.store.select(ProductSelectors.selectAllProducts)),
    map(products => products.filter(p => p.categoryId === id))
  );
}
