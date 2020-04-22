import mapObj from '../mapObj/mapObj';

export default <T, U extends Record<string, T>>(
  objMap: U,
  key: string = 'key',
) =>
  mapObj((obj: T, k) => ({
    [key]: k,
    ...obj,
  }))(objMap) as Record<string, T>;
