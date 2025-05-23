import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BaseEntity } from '../../models/base-entity.model';
@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.scss'],
})
export class EntityListComponent<T extends BaseEntity>{
  @Input() entities: T[] = [];
  @Input() displayedColumns: string[] = ['name'];
  @Output() delete = new EventEmitter<number>();
}
