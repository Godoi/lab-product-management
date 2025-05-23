import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from './user.reducer';
import { User } from '../../shared/models/user.model';

export const selectUserState = createFeatureSelector<State>('user');

export const selectAllUsers = createSelector(
  selectUserState,
  (state: State) => state.users
);

export const selectLoading = createSelector(
  selectUserState,
  (state: State) => state.loading
);

export const selectError = createSelector(
  selectUserState,
  (state: State) => state.error
);

export const selectUserById = (userId: number) =>
  createSelector(
    selectAllUsers,
    (users: User[]) => users.find(user => user.id === userId)
  );
