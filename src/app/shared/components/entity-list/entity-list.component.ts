import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Identifiable } from '../../models/identifiable.model';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.scss'],
})
export class EntityListComponent<T extends Product>{
  @Input() entities: T[] = [];
  @Input() displayedColumns: string[] = ['name'];
  @Output() delete = new EventEmitter<number>();
}
