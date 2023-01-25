import { AnyAction } from 'redux';

import {
  signInSuccess,
  signOutSuccess,
  signInFailed,
  signUpFailed,
  signOutFailed,
  setIsUserDropdownOpen,
} from './user.action';

import { UserData } from '../../utils/firebase/firebase.utils';

export type UserState = {
  readonly isUserDropdownOpen: boolean;
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: UserState = {
  isUserDropdownOpen: false,
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (
  state = INITIAL_STATE,
  action = {} as AnyAction
) => {
  if(setIsUserDropdownOpen.match(action)) {
    return {
      ...state,
      isUserDropdownOpen: action.payload,
    };
  }

  if (signInSuccess.match(action)) {
    return { ...state, currentUser: action.payload };
  }

  if (signOutSuccess.match(action)) {
    return { ...state, currentUser: null };
  }

  if (
    signOutFailed.match(action) ||
    signInFailed.match(action) ||
    signUpFailed.match(action)
  ) {
    return { ...state, error: action.payload };
  }

  return state;
};