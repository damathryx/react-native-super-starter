import copyObjKeys from './copyObjKeys';

describe('utils/DataUtils/copyObjKeys', () => {
  const fixture: Record<string, Record<string, number>> = {
    a: { c: 2 },
    b: { c: 4 },
  };

  test('copies keys into contained object', () => {
    const expected: Record<string, Record<string, number | string>> = {
      a: { c: 2, key: 'a' },
      b: { c: 4, key: 'b' },
    };

    const result: Record<string, Record<string, number>> = copyObjKeys(fixture);

    expect(result).toEqual(expected);
  });
});
