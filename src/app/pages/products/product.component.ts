import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Product } from '../../shared/models/product.model';
import * as ProductActions from '../../store/product/product.actions';
import * as ProductSelectors from '../../store/product/product.selectors';
import { EntityListComponent } from '../../shared/components/entity-list/entity-list.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  standalone: true,
  imports: [
    EntityListComponent,
    AsyncPipe
  ]
})
export class ProductComponent {
  products$: Observable<Product[]>;
  loading$: Observable<boolean>;

  newProduct: Partial<Product> = {};

  constructor(private store: Store) {
    this.products$ = store.select(ProductSelectors.selectAllProducts);
    this.loading$ = store.select(ProductSelectors.selectLoading);
  }

  ngOnInit(): void {
    this.store.dispatch(ProductActions.loadProducts());
  }

  onSave(product: Partial<Product>) {
    this.store.dispatch(ProductActions.createProduct({ product: product as Product }));
  }

  onDelete(id: number) {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
      this.store.dispatch(ProductActions.deleteProduct({ id }));
    }
  }
}
