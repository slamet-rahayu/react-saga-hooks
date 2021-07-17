import { spawn } from 'redux-saga/effects';
import counter from './counter';
import todos from './todos';

export default function* rootSaga(){
    yield spawn(counter);
    yield spawn(todos);
}
