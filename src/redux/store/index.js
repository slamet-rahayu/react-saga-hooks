import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { counter, todos} from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  counter,
  todos
});

const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
