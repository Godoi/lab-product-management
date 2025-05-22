import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Identifiable } from '../../models/identifiable.model';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
})
export class EntityListComponent<T extends Identifiable>{
  @Input() entities: T[] = [];
  @Input() displayedColumns: string[] = ['name'];
  @Output() delete = new EventEmitter<number>();
}
