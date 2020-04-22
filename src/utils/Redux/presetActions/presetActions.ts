import { createAsyncAction } from 'redux-promise-middleware-actions';

export default {
  makeIdentity: <PayloadType>() => (payload: PayloadType) => payload,
  makeAsyncAction: <ResolveType>(actionName: string) =>
    createAsyncAction(actionName, (promise: Promise<ResolveType>) => promise),
  noPayload: () => {},
};
