import { put, takeLatest } from 'redux-saga/effects';
import { INCREMENT, INCREMENT_REQ, DECREMENT, DECREMENT_REQ } from '../constant/counter';

function* increment() {
    yield put({type: INCREMENT})
}

function* decrement() {
    yield put({type: DECREMENT})
}

export default function* counter() {
    yield takeLatest(INCREMENT_REQ, increment)
    yield takeLatest(DECREMENT_REQ, decrement)
}