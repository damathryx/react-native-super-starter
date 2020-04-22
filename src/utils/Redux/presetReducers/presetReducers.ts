import { Action } from 'types/Action';

export default {
  makeSetter: <T>() => (state: T, action: Action<T>): T => action.payload,
  makePending: <T extends {}>() => (state: T): T => {
    return {
      ...state,
      pending: true,
    };
  },
  makeMerge: <T extends {}>() => (state: T, action: Action<Partial<T>>): T => {
    return {
      ...state,
      ...action.payload,
    };
  },
  makeReset: <T>(initState: T) => (): T => initState,
  empty: (): null => null,
};
