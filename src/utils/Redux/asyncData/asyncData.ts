import { AsyncState } from 'types/store/AsyncState';
import { Optional } from 'types/util/Optional';

export function asyncData<T>(
  pending: boolean,
  data: T,
  Message?: Optional<string>,
  error?: Optional<boolean>,
): AsyncState<T> {
  return {
    pending,
    data,
    Message,
    error,
  };
}
