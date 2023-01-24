import { createSelector } from 'reselect';

import { RootState } from '../store';

import { UserState } from './user.reducer';

export const selectUserReducer = (state: RootState): UserState => state.user;

export const selectIsUserDropdownOpen = createSelector(
  [selectUserReducer],
  (user) => user.isUserDropdownOpen
);

export const selectCurrentUser = createSelector(
  selectUserReducer,
  (user) => user.currentUser
);