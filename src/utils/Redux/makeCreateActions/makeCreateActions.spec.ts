import createActions from './makeCreateActions';
import { presetActions } from '..';

describe('utils/ReduxUtils/makeCreateAction', () => {
  const namespace = 'NAMESPACE';

  const createTestAction = createActions(namespace);

  const fixture = {};

  test('should accept single param to create function', () => {
    expect(typeof createTestAction).toBe('function');
  });

  describe('identity actionCreator', () => {
    const testAction = createTestAction({
      idTest: presetActions.makeIdentity(),
    });

    test('returns action id and actionCreator', () => {
      expect(testAction.idTest.toString()).toEqual('NAMESPACE/ID_TEST');
      expect(typeof testAction.idTest).toEqual('function');
    });

    test('called creates expected action', () => {
      const action = testAction.idTest(fixture);

      expect(action).toEqual({ type: 'NAMESPACE/ID_TEST', payload: fixture });
    });
  });

  describe('void actionCreator', () => {
    const testAction = createTestAction({
      idTest: presetActions.makeIdentity(),
      voidTest: presetActions.noPayload,
    });

    test('returns action id and actionCreator', () => {
      expect(testAction.voidTest.toString()).toEqual('NAMESPACE/VOID_TEST');
      expect(typeof testAction.voidTest).toEqual('function');
    });

    test('called creates expected action', () => {
      const action = testAction.voidTest();

      expect(action).toEqual({
        type: 'NAMESPACE/VOID_TEST',
        payload: undefined,
      });
    });
  });
});
