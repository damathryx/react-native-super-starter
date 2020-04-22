import { handleActions } from 'redux-actions';
import { presetReducers } from 'utils/Redux';
import { AuthState } from 'types/store/AuthState';
import { authActions } from '../actions';

const DEFAULT_STATE: AuthState = {
  token: null,
};

const reducer = handleActions<AuthState, any>(
  {
    [String(authActions.updated)]: presetReducers.makeMerge(),
    [String(authActions.clear)]: presetReducers.makeReset(DEFAULT_STATE),
  },
  DEFAULT_STATE,
);

export default reducer;
