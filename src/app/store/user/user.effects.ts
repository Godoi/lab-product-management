import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { Actions, ofType, createEffect } from '@ngrx/effects';

import * as UserActions from './user.actions';
import { UserService } from '../../core/services/user.service';


@Injectable()
export class UserEffects {

    constructor(private actions$: Actions, private service: UserService) {}

    loadUsers$ = createEffect(() =>
      this.actions$.pipe(
        ofType(UserActions.loadUsers),
        mergeMap(() =>
          this.service.getUser().pipe(
            map(users => UserActions.loadUsersSuccess({ users })),
            catchError(error => of(UserActions.loadUsersFailure({ error })))
          )
        )
      )
    );

    addUser$ = createEffect(() =>
      this.actions$.pipe(
        ofType(UserActions.createUser),
        mergeMap(action =>
           this.service.createUser(action.user).pipe(
            map(user => UserActions.createUser({ user })),
            catchError(error => of(UserActions.createUserFailure({ error })))
          )
        )
      )
    );

    updateUser$ = createEffect(() =>
      this.actions$.pipe(
        ofType(UserActions.createUser),
        mergeMap(action =>
           this.service.updateUser(action.user).pipe(
            map(user => UserActions.updateUser({ user })),
            catchError(error => of(UserActions.updateUserFailure({ error })))
          )
        )
      )
    );

    deleteUser$ = createEffect(() =>
      this.actions$.pipe(
        ofType(UserActions.deleteUser),
        mergeMap(({ id }) =>
        this.service.deleteUser(id).pipe(
            map(() => UserActions.deleteUserSuccess({ id })),
            catchError(error => of(UserActions.deleteUserFailure({ error })))
          )
        )
      )
    );
}
