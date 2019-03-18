import { all, call, put, select, takeEvery } from "redux-saga/effects";
import { INCREMENT, DECREMENT } from "./actions";
import api from "../api";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export function* increment() {
    let state = yield select();
    yield put({ type: "save", payload: { count: state.count + 1 } });
    yield console.log("function*increment");
}
export function* incrementAsync() {
    yield delay(1000);
    yield put({ type: INCREMENT, payload: 1 });
    yield console.log("function*incrementAsync");
}
export function* decrement() {
    let state = yield select();
    yield put({ type: "save", payload: { count: state.count - 1 } });
    yield console.log("function*decrement");
}
export function* decrementAsync() {
    yield delay(1000);
    yield put({ type: DECREMENT, payload: 1 });
    yield console.log("function*decrementAsync");
}
export function* fetchData(action) {
    let data = yield call(api.get, action.payload);
    yield console.log(data);
}
export function* show() {
    let state = yield select();
    yield console.log(state);
}

export function* helloSaga() {
    yield console.log("hello Saga");
}

export function* watchIncrement() {
    yield takeEvery("INCREMENT", increment);
}

export function* watchDecrement() {
    yield takeEvery("DECREMENT", decrement);
}

export function* watchIncrementAsync() {
    yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

export function* watchDecrementAsync() {
    yield takeEvery("DECREMENT_ASYNC", decrementAsync);
}

export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrement(),
        watchDecrement(),
        watchIncrementAsync(),
        watchDecrementAsync()
    ]);
}
