import { put, call } from 'redux-saga/effects';

export const tryCatchWrapper = (
  sagaFn: (...args: any[]) => Generator, 
  errorHandler: (error: string) => any     
) =>
  function* (action: any) {
    try {
      yield call(sagaFn, action);       
    } catch (error: unknown) {
      if (error instanceof Error) {
        yield put(errorHandler(error.message));
      } 
    }
  };
