import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { User } from '../../shared/models/user.model';
import * as UserActions from '../../store/user/user.actions';
import * as UserSelectors from '../../store/user/user.selectors';
import { EntityListComponent } from '../../shared/components/entity-list/entity-list.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  standalone: true,
  imports: [
    EntityListComponent,
    AsyncPipe
  ]
})
export class UserComponent {
  users$: Observable<User[]>;
  loading$: Observable<boolean>;

  newUser: Partial<User> = {};

  constructor(private store: Store) {
    this.users$ = store.select(UserSelectors.selectAllUsers);
    this.loading$ = store.select(UserSelectors.selectLoading);
  }

  ngOnInit(): void {
    this.store.dispatch(UserActions.loadUsers());
  }

  onSave(user: Partial<User>) {
    this.store.dispatch(UserActions.createUser({ user: user as User }));
  }

  onDelete(id: number) {
    if (confirm('Tem certeza que deseja excluir este usuário?')) {
      this.store.dispatch(UserActions.deleteUser({ id }));
    }
  }
}
