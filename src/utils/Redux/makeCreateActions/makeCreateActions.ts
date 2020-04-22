import { camelToSnake } from 'utils/String';

const makeCreateActions = (ns: string) => <
  O extends { [P in keyof O]: ((...args: any[]) => any) | (() => void) },
  P extends string
>(
  actionMap: O,
): {
  [P in keyof O]: ((
    ...args: Parameters<O[P]>
  ) => { type: string; payload: ReturnType<O[P]> })
} =>
  Object.keys(actionMap).reduce((acc: Partial<O>, k: string) => {
    // @ts-ignore
    if (actionMap[k].pending !== undefined) {
      // @ts-ignore
      return { ...acc, [k]: actionMap[k] };
    }
    const actionSnake = camelToSnake(k);
    const creatorFn = (...args: any[]) => ({
      type: `${ns}/${actionSnake}`,
      // @ts-ignore
      ...(actionMap[k] ? { payload: actionMap[k](...args) } : {}),
    });
    creatorFn.toString = () => `${ns}/${actionSnake}`;
    return {
      ...acc,
      [k]: creatorFn,
    };
  }, {}) as {
    [P in keyof O]: ((
      ...args: Parameters<O[P]>
    ) => { type: string; payload: ReturnType<O[P]> })
  };

export default makeCreateActions;
