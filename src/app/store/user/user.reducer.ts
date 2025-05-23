import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import { User } from '../../shared/models/user.model';

export interface State {
  users: User[];
  loading: boolean;
  error: any;
}

const initialState: State = {
  users: [],
  loading: false,
  error: null
};

const _userReducer = createReducer(
  initialState,

  on(UserActions.loadUsers, state => ({ ...state, loading: true })),

  on(UserActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false
  })),

  on(UserActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),

  on(UserActions.createUserSuccess, (state, { user }) => ({
    ...state,
    users: [...state.users, user]
  })),

  on(UserActions.deleteUserSuccess, (state, { id }) => ({
    ...state,
    users: state.users.filter(user => user.id !== id)
  }))
);

export function userReducer(state: State | undefined, action: any) {
  return _userReducer(state, action);
}
