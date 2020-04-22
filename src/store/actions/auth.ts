import { presetActions, makeCreateActions } from 'utils/Redux';
import { AuthState } from 'types/store/AuthState';

const ns = 'Auth';
const createSessionActions = makeCreateActions(ns);

const sessionActions = createSessionActions({
  updated: presetActions.makeIdentity<AuthState>(),
  clear: presetActions.noPayload,
});

export default sessionActions;
