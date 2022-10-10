import { delay, put, takeEvery } from "redux-saga/effects";

function* getTodosAsync(){
  yield delay(500);
  yield put({type: 'SET_TODOS_ASYNC', payload: []})
}

export function* watchGetTodos() {
  yield takeEvery("SET_TODOS", getTodosAsync);
}
